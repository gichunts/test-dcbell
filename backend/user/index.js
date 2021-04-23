// module.exports = async function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     const name = (req.query.name || (req.body && req.body.name));
//     const responseMessage = name
//         ? "Hello, " + name + ". This HTTP triggered function executed successfully."
//         : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

//     context.res = {
//         // status: 200, /* Defaults to 200 */
//         body: responseMessage
//     };
// }

// module.exports = async (context, req) => {
//   const id = 1;
//   const firstName = "First name";
//   const lastName = "Last name";

//   context.res = {
//     body: {
//       id,
//       firstName,
//       lastName,
//     },
//   };
// };

const main = require("../keyvault");

module.exports = async function (context) {
  try {
    // const sendGrid = await SendGrid.createInstance(false);
    // await sendGrid.sendEmail('<h1>Text</h1>', 'Subject', 'thiago@hesper.io');
    const result = await main("db");
    context.log(result, "result");
    context.res = {
      body: result,
    };
  } catch (error) {
    console.error(error);

    context.res = {
      body: false,
    };
  }
};
