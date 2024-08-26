/*CMD
  command: index.html
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Web app example</title>

    <style>
      .container {
        background-color: #212529;
        color: white;
        margin: 0;
        padding: 0;
      }
      .coin-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }
      .coin-container img {
        width: 100px;
      }
      .coin-text {
        font-size: 2rem;
        margin-left: 10px;
      }

      .progress {
        width: 100%;
        height: 10px;
        background-color: #333;
        border-radius: 5px;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background: linear-gradient(to right, #4cd964, #5ac8fa, #007aff);
        border-radius: 5px;
        transition: width 0.5s ease-in-out;
      }

      .footer-nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }

      .game-button {
        background-color: #333;
        border-radius: 10px;
        padding: 10px;
        text-align: center;
        color: white;
        margin-right: 5px;
        flex-grow: 1;
      }
      .game-button span {
          display: block;
          color: #ffd700; /* Gold color for coins */
          font-size: 1.5rem;
      }
      .game-button:nth-child(1) span {
          color: #ff7f50; /* Coral color for Earn per tap */
      }
      .game-button:nth-child(2) span {
          color: #1e90ff; /* DodgerBlue color for Coins to level up */
      }
      .game-button:nth-child(3) span {
          color: #32cd32; /* LimeGreen color for Profit per hour */
      }

      .work-button .gradient-border {
        display: inline-block;
        padding: 12px;
        border-radius: 50%;
        background: linear-gradient(45deg, #11153a, #2b407c, #6c3ef7, #339af0);
        background-size: 200% 200%;
        animation: gradient-animation 5s ease infinite;
      }

      .work-button .gradient-border video {
        display: block;
        border-radius: 50%;
        overflow: hidden;
      }

      @keyframes gradient-animation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }

      /* page navigation */
      .nav-bar {
        display: flex;
        justify-content: space-between;
        background-color: #2a2e35;
        border-radius: 20px;
        padding: 10px;
        margin-bottom: 20px;
      }

      .nav-item {
        background: none;
        border: none;
        color: #ffffff;
        font-size: 14px;
        cursor: pointer;
      }

      .nav-item.active {
        color: #007bff;
      }

      /* bottom naivgation panel */
      .bottom-nav {
        display: flex;
        justify-content: space-around;
        background-color: #1e2228;
        padding: 10px;
        border-radius: 10px;
      }

      .nav-button {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: none;
        border: none;
        color: #6c757d;
        font-size: 0.8rem;
        transition: color 0.3s;
      }

      .nav-button img {
        width: 24px;
        height: 24px;
        margin-bottom: 5px;
      }

      .nav-button.active {
        color: #ffffff;
      }

      .nav-button:focus {
        outline: none;
      }

      .user-info {
        padding: 10px;
        background-color: #1e2228;
        border-radius: 10px;
        margin-top: 20px;
      }

      .icon-coin {
        background-image: url('https://cdn-icons-png.flaticon.com/512/9382/9382189.png');
        background-size: contain;
        width: 24px;
        height: 24px;
        padding-left: 30px;
        background-repeat: no-repeat;
      }


      /* Event card on Mine page */
      .event-card {
        background-color: #2a2e35;
        border-radius: 15px;
        padding: 15px;
        margin-bottom: 15px;
      }

      .event-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      .event-icon {
        width: 50px;
        height: 50px;
        margin-right: 15px;
        border-radius: 10px;
      }

      .event-details h3 {
        margin: 0;
        font-size: 16px;
      }

      .event-details p {
        margin: 5px 0;
        font-size: 12px;
        color: #8a8d91;
      }

      .event-profit {
        font-size: 14px;
        font-weight: bold;
      }

      .level-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #3a3e45;
        padding-top: 10px;
      }

      .level, .total-profit {
        font-size: 14px;
      }


    </style>

  </head>
  <body>

    <div class="container" id="app">

      <div class="user-info d-flex justify-content-between align-items-center">
        <span class="text-primary">{{ user.username || user.telegramid }}</span>
        <span class="text-light icon-coin"> {{ user.balance }}</span>
      </div>

      <div class="d-flex justify-content-center pt-2">
        <div class="game-button">
          <div>Earn per tap</div>
          <span>+1</span>
        </div>
        <div class="game-button">
          <div>Coins to level up</div>
          <span>5K</span>
        </div>
        <div class="game-button">
          <div>Profit per hour</div>
          <span>0</span>
        </div>
      </div>

      <div v-if="activePage === 'Work'">
        <div class="coin-container mt-4">
          <img src="https://cdn-icons-png.flaticon.com/512/9382/9382189.png" alt="Coin">
          <span class="coin-text">{{ user.balance }}</span>
        </div>

        <h5 class="d-flex justify-content-between">
          <span>Bronze ></span>
          <span>Level 1/9</span>
        </h5>
        <div class="progress">
          <div class="progress-bar" role="progressbar" style="width: 20%;" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        <div class="m-5 work-button">
          <div class="gradient-border">
            <video width="256" height="256" preload="none"
              style="background: transparent url('https://cdn-icons-png.flaticon.com/512/11926/11926848.png') 50% 50% / fit no-repeat;"
              autoplay="autoplay" loop="true" muted="muted" playsinline="">
              <source src="https://cdn-icons-mp4.flaticon.com/512/11926/11926848.mp4" type="video/mp4">
            </video>
          </div>
        </div>
      </div>

      <div v-if="activePage === 'Mine'">
        <div class="coin-container mt-4">
          <img src="https://cdn-icons-png.flaticon.com/512/9382/9382189.png" alt="Coin">
          <span class="coin-text">{{ user.balance }}</span>
        </div>

        <div class="nav-bar">
          <button  @click="setMineSubPage('Mine')" :class="['nav-item', { active: mineSubPageName === 'Mine' }]" >Mine</button>
          <button  @click="setMineSubPage('Markets')" :class="['nav-item', { active: mineSubPageName === 'Markets' }]" >Markets</button>
        </div>

        <div v-if="mineSubPageName === 'Mine'">
          <div class="event-card">
            <div class="event-header">
              <img src="https://cdn-icons-png.flaticon.com/512/11926/11926834.png" alt="Upgrade mine" class="event-icon">
              <div class="event-details">
                <h3>Upgrade mine</h3>
                <p>Hour income</p>
                <span class="event-profit icon-coin">100</span>
              </div>
            </div>
            <div class="level-info">
              <div class="level">lvl 0</div>
              <div class="total-profit icon-coin">0</div>
            </div>
          </div>

          <div class="event-card">
            <div class="event-header">
              <img src="https://cdn-icons-png.flaticon.com/512/11926/11926820.png" alt="Add track" class="event-icon">
              <div class="event-details">
                <h3>Add truck</h3>
                <p>Hour income</p>
                <span class="event-profit icon-coin">100</span>
              </div>
            </div>
            <div class="level-info">
              <div class="level">lvl 0</div>
              <div class="total-profit icon-coin">0</div>
            </div>
          </div>

        </div>

        <div v-if="mineSubPageName === 'Markets'">
          <div class="event-card">
            <div class="event-header">
              <img src="https://cdn-icons-png.flaticon.com/512/11926/11926899.png" alt="Apple" class="event-icon">
              <div class="event-details">
                <h3>Apple for connection</h3>
                <p>Hour income</p>
                <span class="event-profit icon-coin">100</span>
              </div>
            </div>
            <div class="level-info">
              <div class="level">lvl 0</div>
              <div class="total-profit icon-coin">0</div>
            </div>
          </div>
        </div>


      </div>

      <div class="bottom-nav">
        <button v-for="(item, index) in navItems"
                :key="index"
                @click="setActivePage(item.name)"
                :class="['nav-button', { active: activePage === item.name }]">
          <img :src="item.icon" :alt="item.name">
          <span>{{ item.name }}</span>
        </button>
      </div>

    </div>




    <div class="container" id="app">
      <div class="row m-3">
          <div class="col-6">
            <button id="increment" @click="addBalance(1)" class="btn btn-primary w-100">Balance: +1</button>
          </div>
      </div>
      <div class="row">
          <div class="col-12">
            <button id="save" class="btn btn-success w-100" @click="saveBalance()">Save</button>
          </div>
      </div>
    </div>

    <!-- VueJS script -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.4.38/dist/vue.global.min.js"></script>

    <!-- Bootstrap -->
    <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js "></script>
    <link href=" https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css " rel="stylesheet">


    <script>
      // simple VueJS app to demonstrate data binding
      const app = Vue.createApp({
        data() {
          return {
            // pass balance from options
            user: {},
            // extract url from url path. It is personal url for user
            syncUserDataUrl: new URL(window.location.href).searchParams.get("syncUserDataUrl"),
            // current active page
            activePage: 'Work',
            mineSubPageName: 'Mine',
            navItems: [
              { name: 'Work', icon: 'https://cdn-icons-png.flaticon.com/512/11926/11926848.png' },
              { name: 'Mine', icon: 'https://cdn-icons-png.flaticon.com/512/4491/4491005.png' },
              { name: 'Friends', icon: 'https://cdn-icons-png.flaticon.com/512/4490/4490913.png' },
              { name: 'Earn', icon: 'https://cdn-icons-png.flaticon.com/512/4490/4490716.png' }
            ]
          };
        },
        methods: {
          setActivePage(pageName) {
            this.activePage = pageName;
          },
          setMineSubPage(subPageName) {
            this.mineSubPageName = subPageName;
          },
          addBalance(amount) {
            this.user.balance += amount;
          },
          loadBalance() {
            // get balance from server
            // see: bot command syncBalance
            fetch(this.syncUserDataUrl)
              .then(response => response.json())
              .then(data => {
                this.user = data.user;
              });
          },
          saveBalance() {
            // save balance to server
            // see: bot command syncBalance
            fetch(this.syncUserDataUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ balance: this.user.balance })
            }).then(() => {
              alert('Balance saved');
            });
          }
        },
        // we need to load balance from server
        mounted() {
          this.loadBalance();
        }
      });

      app.mount('#app');
    </script>

  </body>
</html>