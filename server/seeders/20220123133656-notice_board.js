"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Boards",
      [
        {
          user_id: 1,
          occupation: "편의점",
          title: "GS편의점 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-01",
          work_place: "강북",
          content:
            "1월 1일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.",
        },
        {
          user_id: 2,
          occupation: "편의점",
          title: "CU편의점 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-02",
          work_place: "강북",
          content:
            "1월 2일 도붕구 쌍문동 아침 9시에서 저녁 6시까지 편의점 대타 구합니다.",
        },
        {
          user_id: 3,
          occupation: "pc방",
          title: "pc방 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-03",
          work_place: "강북",
          content:
            "1월 3일 도봉구 방학동에서 아침 9시에서 저녁 6시까지 pc방 대타 구합니다.",
        },
        {
          user_id: 4,
          occupation: "주방",
          title: "주방보조 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-04",
          work_place: "강남",
          content:
            "1월 4일 강남구 논현동에서 아침 9시에서 저녁 6시까지 주방보조 대타 구합니다.",
        },
        {
          user_id: 5,
          occupation: "운송",
          title: "배달 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-05",
          work_place: "강서",
          content:
            "1월 5일 강서구 화곡동에서 아침 9시에서 저녁 6시까지 배달 대타 구합니다.",
        },
        {
          user_id: 6,
          occupation: "카페",
          title: "이디야 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-06",
          work_place: "강북",
          content:
            "1월 6일 중랑구 중화동에서 아침 9시에서 저녁 6시까지 이다야 대타 구합니다.",
        },
        {
          user_id: 7,
          occupation: "카페",
          title: "투썸플레이스 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-07",
          work_place: "강남",
          content:
            "1월 7일 서초구 **동에서 아침 9시에서 저녁 6시까지 투썸플레이스 대타 구합니다.",
        },
        {
          user_id: 8,
          occupation: "편의점",
          title: "편의점 단기 알바 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-08",
          work_place: "강북",
          content:
            "1월 8일 강북 미아동에서 아침 9시에서 저녁 6시까지 편의점 단기알바를 하고 싶습니다.",
        },
        {
          user_id: 9,
          occupation: "패스트푸드",
          title: "맥도날드 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-09",
          work_place: "강북",
          content:
            "1월 9일 강북 수유동에서 아침 9시에서 저녁 6시까지 맥도날드 경력 대타 구합니다.",
        },
        {
          user_id: 10,
          occupation: "편의점",
          title: "미니스톱 대타 구합니다",
          wage: "10,000원 이상",
          work_date: "2022-01-10",
          work_place: "강동",
          content:
            "1월 10일 강동구 천호동에서 아침 9시에서 저녁 6시까지 미니스탑 대타 구합니다.",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Boards", null, {});
  },
};
