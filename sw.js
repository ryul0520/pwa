// 🔥 이번 업데이트 고유 ID (버전처럼 생각)
const UPDATE_ID = "2025-09-APWORD-RESET-1";

// 이전에 이 업데이트를 했는지 확인
const lastUpdate = localStorage.getItem("lastUpdateId");

if (lastUpdate !== UPDATE_ID) {
  // ✅ 여기 안에 "딱 한 번만" 실행할 코드 작성

  console.log("📌 이번 업데이트 최초 실행");

  // 예시 1: 저장된 상태 초기화
  localStorage.removeItem("apWordState");

  // 예시 2: 특정 값만 수정
  /*
  const state = JSON.parse(localStorage.getItem("apWordState") || "{}");
  state.currentIndex = 0;
  localStorage.setItem("apWordState", JSON.stringify(state));
  */

  // ✅ 업데이트 완료 기록
  localStorage.setItem("lastUpdateId", UPDATE_ID);
}
