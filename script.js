document.addEventListener("DOMContentLoaded", function() {
    // D-Day 설정 (2023년 크리스마스)
    const targetDate = new Date("December,25,2023").getTime();

    // 카운트다운 갱신 함수
    function updateCountdown() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        // 남은 시간 계산
        const days = Math.floor(timeRemaining / (1000 *60 *60 *24));
        const hours = Math.floor((timeRemaining % (1000 *60 *60 *24)) / (1000 *60 *60));
        const minutes = Math.floor((timeRemaining % (1000 *60 *60)) / (1000 *60));
        const seconds = Math.floor((timeRemaining % (1000*60)) /1000);

       // 카운트다운 업데이트
       document.getElementById("countdown").innerHTML =
           days + "일 " + hours + "시간 " + minutes + "분 " + seconds + "초";
    }

    updateCountdown(); // 초기 실행

    setInterval(updateCountdown, 1000); // 매 초마다 업데이트

     // 오디오 반복 재생
     let audioPlayer;

     function playAudio() {
         audioPlayer.play();
     }

     function initAudioPlayer() {
         audioPlayer = new Audio('audio/kcarol.mp3');
         audioPlayer.loop = true;
         playAudio();
     }

     initAudioPlayer();

      // 배경 이미지 랜덤 설정
      function setRandomBackground() {
          const images = ["images/1.webp", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg"];
          const randomIndex = Math.floor(Math.random() * images.length);
          document.getElementById("background").style.backgroundImage =
              `url(${images[randomIndex]})`;
      }
  
      setRandomBackground(); // 초기 실행
  
      window.addEventListener('beforeunload', setRandomBackground); // 페이지 새로고침 시 실행

});
