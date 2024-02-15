const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string
const uri =  
  "mongodb+srv://adwaituprety:AmazingDaysLieAhead2024!@buildersdata.qkgbh2k.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

function sumbitFormDetailsToPostAPI_HOMEPAGEDetails() {

    //check how to run node server on submit...
document.getElementById("homepageForm").submit;


const builderTypeValue = document.getElementById("builderType").value;
const countryTypeValue = document.getElementById("countryType").value;
const inputEmailValue = document.getElementById("inputEmail").value;
const inputWebsiteValue = document.getElementById("inputWebsite").value;
const inputFulllNameValue = document.getElementById("inputFulllName").value;
const inputisBorCValue = document.getElementById("inputisBorC").value;
const inputZipValue = document.getElementById("inputZip").value;
const inputReferValue = document.getElementById("inputRefer").value;
                      
 async function run() {
    try {

        // Connect to the Atlas cluster
         await client.connect();
         // Get the database and collection on which to run the operation
         const db = client.db("builders");
         const col = db.collection("builder");

         // Create new documents                                                                                                                                         
         const builderForm = [
           {
            "builderType": builderTypeValue,
            "countryType": countryTypeValue, 
            "inputEmail": inputEmailValue,
            "inputWebsite": inputWebsiteValue,
            "inputFulllName": inputFulllNameValue,
            "inputisBorC": inputisBorCValue,
            "inputZip": inputZipValue,
            "inputRefer": inputReferValue

           },
           {
            "builderType": builderTypeValue,
            "countryType": countryTypeValue, 
            "inputEmail": inputEmailValue,
            "inputWebsite": inputWebsiteValue,
            "inputFulllName": inputFulllNameValue,
            "inputisBorC": inputisBorCValue,
            "inputZip": inputZipValue,
            "inputRefer": inputReferValue

           }
         ]
         // Insert the documents into the specified collection        
         const p = await col.insertMany(peopleDocuments);
         // Find the document
         const filter = { "name.value": "beats/applications" };
         const document = await col.findOne(filter);
         // Print results
         console.log("Document found:\n" + JSON.stringify(document));
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);
}
