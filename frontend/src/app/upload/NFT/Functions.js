import {
  uploadFileToIPFS,
  uploadJSONToIPFS,
} from "./../../../../../backend/pinata/pinata.js";

//This function uploads the metadata to IPFS
async function uploadMetadataToIPFS() {
  const { name, description, price } = formParams;
  //Make sure that none of the fields are empty
  if (!name || !description || !price || !fileURL) {
    // updateMessage("Please fill all the fields!");
    return -1;
  }

  const nftJSON = {
    name,
    description,
    price,
    image: fileURL,
  };

  try {
    //upload the metadata JSON to IPFS
    const response = await uploadJSONToIPFS(nftJSON);
    if (response.success === true) {
      console.log("Uploaded JSON to Pinata: ", response);
      return response.pinataURL;
    }
  } catch (e) {
    console.log("error uploading JSON metadata:", e);
  }
}

export async function listNFT(e) {
  e.preventDefault();

  //Upload data to IPFS
  try {
    const metadataURL = await uploadMetadataToIPFS();
    if (metadataURL === -1) return;
    //After adding your Hardhat network to your metamask, this code will get providers and signers
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    disableButton();
    // updateMessage("Uploading NFT(takes 5 mins).. please dont click anything!");

    //Pull the deployed contract instance
    let contract = new ethers.Contract(
      Marketplace.address,
      Marketplace.abi,
      signer
    );

    //massage the params to be sent to the create NFT request
    const price = ethers.utils.parseUnits(formParams.price, "ether");
    let listingPrice = await contract.getListPrice();
    listingPrice = listingPrice.toString();

    //actually create the NFT
    let transaction = await contract.createToken(metadataURL, price, {
      value: listingPrice,
    });
    await transaction.wait();

    alert("Successfully listed your NFT!");
    // enableButton();
    // updateMessage("");
    updateFormParams({ name: "", description: "", price: "" });
    window.location.replace("/");
  } catch (e) {
    alert("Upload error" + e);
  }
}
