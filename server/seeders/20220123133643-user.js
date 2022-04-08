module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          userId: "test1",
          password: "1234abc",
          nickname: "kimcoding1",
          email: "test1@codingjoa.com",
          mobile: "01012345678",
        },
        {
          userId: "test2",
          password: "1234abc",
          nickname: "kimcoding2",
          email: "test2@codingjoa.com",
          mobile: "01011112222",
        },
        {
          userId: "test3",
          password: "1234abc",
          nickname: "kimcoding3",
          email: "test3@codingjoa.com",
          mobile: "01022223333",
        },
        {
          userId: "test4",
          password: "1234abc",
          nickname: "kimcoding4",
          email: "test4@codingjoa.com",
          mobile: "01033334444",
        },
        {
          userId: "test5",
          password: "1234abc",
          nickname: "kimcoding5",
          email: "test5@codingjoa.com",
          mobile: "01044445555",
        },
        {
          userId: "test5",
          password: "1234abc",
          nickname: "kimcoding5",
          email: "test5@codingjoa.com",
          mobile: "01055556666",
        },
        {
          userId: "test6",
          password: "1234abc",
          nickname: "kimcoding6",
          email: "test6@codingjoa.com",
          mobile: "01066667777",
        },
        {
          userId: "test7",
          password: "1234abc",
          nickname: "kimcoding7",
          email: "test7@codingjoa.com",
          mobile: "01077778888",
        },
        {
          userId: "test8",
          password: "1234abc",
          nickname: "kimcoding8",
          email: "test8@codingjoa.com",
          mobile: "01088889999",
        },
        {
          userId: "test9",
          password: "1234abc",
          nickname: "kimcoding9",
          email: "test9@codingjoa.com",
          mobile: "01000001111",
        },
        {
          userId: "test10",
          password: "1234abc",
          nickname: "kimcoding10",
          email: "test1@codingjoa.com",
          mobile: "01000001111",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
