module.exports.getUser = async (context, req) => {
  const id = 1;
  const firstName = 'First name';
  const lastName = 'Last name';

  context.res = {
    body: {
      id,
      firstName,
      lastName
    }
  };
};
