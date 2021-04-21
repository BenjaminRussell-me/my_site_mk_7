<template>
  <div id="resumeHolder">
    <button @click="print" id="printButton" class="bg">Click to print</button>
    <div id="resumePrint">
      <div id="resume">
        <div id="resumeTop" class="dark">
          <div id="resumeName">
            <h2>Benjamin Russell</h2>
            <h5>Web developer and designer</h5>
            <div class="line bg1"></div>
          </div>
          <div id="resumeLogoHolder">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 246.75 284.19"
            >
              <defs>
                <linearGradient
                  id="logoGradient"
                  y1="212.59"
                  x2="246.75"
                  y2="71.6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#448abf" />
                  <stop offset="0.61" stop-color="#44a6af" />
                  <stop offset="1" stop-color="#44bba3" />
                </linearGradient>
              </defs>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="cls-1"
                    d="M123.94,15,233.72,79l-.57,127.09L122.81,269.18,13,205.14,13.6,78.06,123.94,15M124,0l-6.52,3.72L7.15,66.77.64,70.5.6,78,0,205.09l0,7.5,6.48,3.78,109.78,64,6.48,3.78,6.52-3.72L239.6,217.42l6.51-3.73,0-7.5.57-127.09,0-7.5-6.48-3.78-109.78-64L124,0Z"
                  />
                  <path
                    class="cls-2"
                    d="M123.78,275,9,208,9.61,75.15,125,9.24,239.73,76.18,239.14,209ZM19.05,202.28,123.83,263.4l105.33-60.18.54-121.31L124.92,20.78,19.59,81Z"
                  />
                  <path
                    class="cls-2"
                    d="M185.83,165.09a63,63,0,0,1-121.91,0Z"
                  />
                  <circle class="cls-2" cx="184.88" cy="116.09" r="17" />
                  <circle class="cls-2" cx="64.88" cy="115.09" r="17" />
                </g>
              </g>
            </svg>
            <div class="line bg2"></div>
          </div>
        </div>
        <div id="resumeBody">
          <div id="resumeContact">
            <div>
              <h3>Contact</h3>
              <div id="contactInfo">
                <h5>
                  E-mail:
                  <a
                    class="resumeLinks"
                    :href="`mailto:${data?.data?.email}`"
                    >{{ data?.data?.email }}</a
                  >
                </h5>
                <h5>
                  Website:
                  <a
                    class="resumeLinks"
                    :href="`http://${data?.data?.website}`"
                    >{{ data?.data?.website }}</a
                  >
                </h5>
              </div>
            </div>
          </div>
          <div id="deviderLine">
            <div class="dualLineHolder">
              <div class="halfline bg1"></div>
              <div class="halfline dark"></div>
            </div>
          </div>
          <div id="resumeSkills" class="dark">
            <div class="line bg2"></div>
            <div id="resumeSkillsContent">
              <h3>Skills</h3>
              <ul>
                <li
                  v-for="(skill, index) in data?.data?.skills"
                  :key="`skills${index}`"
                >
                  {{ skill.text }}
                </li>
              </ul>
            </div>
          </div>
          <div id="resumeExperience">
            <div>
              <h3>Experience</h3>
              <h5>{{ data?.data?.experience?.title }}</h5>
              <p>
                <em>{{ data?.data?.experience?.subHead }}</em>
              </p>
              <ul>
                <li
                  v-for="(experiences, index) in data?.data?.experience
                    ?.experiences"
                  :key="`experiences${index}`"
                >
                  {{ experiences.text }}
                </li>
              </ul>
            </div>
            <div class="dualLineHolder">
              <div class="halfline bg1"></div>
              <div class="halfline dark"></div>
            </div>
          </div>

          <div id="resumeAbout">
            <h3>About</h3>
            <p
              v-for="(about, index) in data?.data?.about"
              :key="`about${index}`"
            >
              {{ about.text }}
            </p>
          </div>
        </div>
        <div id="resumeFooter">
          <div id="footerHolder">
            <div
              class="footerSpike bg"
              :class="`spike${index}`"
              v-for="(block, index) in 11"
              :key="index"
            ></div>
            <div id="bars">
              <div id="topBar" class="bg"></div>
              <div id="bottomBar" class="dark"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { dataStore } from "../store/data";
import { defineComponent, onMounted, computed, ref } from "vue";
export default defineComponent({
  setup() {
    function print() {
      let stylesHtml = "";
      for (const node of [
        ...document.querySelectorAll('link[rel="stylesheet"], style'),
      ]) {
        stylesHtml += node.outerHTML;
      }
      const prtContent = document.querySelector("#resumePrint");
      const winPrint = window.open(
        "",
        "",
        "left=0,top=0,width=912,height=1092,toolbar=0,scrollbars=0,status=0,margins=None"
      );
      const printHtml = prtContent?.innerHTML;
      winPrint?.document.write(`
        <!DOCTYPE html>
          <html lang="en">
            <head>
              ${stylesHtml}
            </head>
            <body>
               ${printHtml}
            </body>
          </html>
        `);
      setTimeout(() => {
        winPrint?.document.close();
        winPrint?.focus();
        winPrint?.print();
        winPrint?.close();
      }, 500);
    }
    const data = ref({});
    onMounted(() => {
      dataStore.setData("Resume");
      data.value = dataStore.getState();
    });
    return {
      print,
      data,
    };
  },
});
</script>

<style scoped lang="scss">
.cls-1 {
  fill: url(#logoGradient);
}
.cls-2 {
  fill: #fff;
}
.bg {
  background: linear-gradient(to right, $g1, $g4);
}
.bg1 {
  background: linear-gradient(to right, $g1, $g2);
}
.bg2 {
  background: linear-gradient(to right, $g3, $g4);
}
.dark {
  background: $grey;
}
ul {
  padding: 0 0 0 1rem;
  margin: 0.5rem 0 0 0;
  li {
    padding: 0 0 0 0;
  }
}
.line {
  width: 100% !important;
  height: 5px;
  box-sizing: border-box;
}
.dualLineHolder {
  .halfline {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    height: 3px;
  }
  .dark {
    margin-top: -1px;
  }
}
#resumeHolder {
  display: grid;
  justify-items: center;
}
#resumePrint {
  box-shadow: 0 0 5px 3px black;
}
#resume {
  -webkit-print-color-adjust: exact;
  display: grid !important;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  grid-column-gap: 1rem;
  width: 8.5in;
  height: 11in;
  background: white;
  color: hsl(208, 13%, 23%);
}
.resumeLinks {
  font-weight: inherit;
  font-size: inherit;
  text-decoration: none;
  color: $g1;
}
#resumeBody {
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto 1fr auto;
  grid-column-gap: 1rem;
  padding: 2rem;
  box-sizing: border-box;
}
#resumeTop {
  box-sizing: border-box;
  color: white;
  grid-column-gap: 1rem;
  display: grid;
  padding: 6rem 2rem 1rem 2rem;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: end;
  align-self: start;
  #resumeName {
    grid-column: span 2;
  }
  #resumeLogoHolder {
    width: 100%;
    display: grid;
    justify-items: center;
    svg {
      width: 70px;
      padding: 0.5rem;
    }
  }
}
#resumeContact {
  grid-column: span 3;
  #contactInfo {
    display: flex;
    justify-content: left;
    column-gap: 1rem;
    align-items: center;
  }
}
#deviderLine {
  grid-column: span 2;
}
#resumeExperienceTitle {
  grid-column: span 3;
}
#resumeExperience {
  grid-column: span 2;
}
#resumeSkills {
  grid-row: span 3;
  color: white;
  margin-bottom: 10rem;
  #resumeSkillsContent {
    padding: 1rem;
  }
}
#resumeAbout {
  grid-column: span 2;
}
#resumeFooter {
  height: 80px;
  #footerHolder {
    height: 100%;
    display: grid;
    .footerSpike {
      grid-area: 1/1/1/1;
      z-index: 200;
      align-self: center;
    }
    .spike0 {
      width: 25px;
      margin-left: 2%;
      height: 10px;
      margin-bottom: 20px;
      background: $g1;
    }
    .spike1 {
      width: 6px;
      margin-left: 10%;
      background: $grey;
      height: 50px;
      margin-bottom: 20px;
    }
    .spike2 {
      width: 10px;
      margin-left: 15%;
      height: 20px;
      margin-bottom: 35px;
      background: hsl(193, 78%, 47%);
    }
    .spike3 {
      width: 14px;
      margin-left: 25%;
      height: 60px;
      margin-bottom: 2px;
      background: hsl(186, 76%, 44%);
    }
    .spike4 {
      width: 5px;
      margin-left: 38%;
      background: $grey;
      height: 20px;
      margin-bottom: 10px;
    }
    .spike5 {
      width: 7px;
      margin-left: 40%;
      height: 15px;
      margin-bottom: 25px;
      background: hsl(177, 76%, 42%);
    }
    .spike6 {
      width: 35px;
      margin-left: 55%;
      background: $grey;
      height: 25px;
      margin-bottom: 20px;
    }
    .spike7 {
      width: 15px;
      margin-left: 68%;
      height: 20px;
      margin-bottom: 35px;
      background: hsl(160, 78%, 46%);
    }
    .spike8 {
      width: 23px;
      margin-left: 80%;
      background: $grey;
      height: 40px;
      margin-bottom: 20px;
    }
    .spike9 {
      width: 5px;
      margin-left: 92%;
      margin-bottom: 30px;
      height: 60px;
      margin-bottom: 10px;
      background: hsl(149, 79%, 49%);
    }
    .spike10 {
      width: 20px;
      margin-left: 96%;
      height: 10px;
      margin-bottom: 20px;
      background: $g4;
    }
    #bars {
      display: grid;
      grid-area: 1/1/1/1;
      align-self: end;
      #topBar {
        width: 100%;
        height: 10px;
      }
      #bottomBar {
        width: 100%;
        height: 40px;
      }
    }
  }
}
$textMargin: 0.2em;
h1,
h2,
h3,
h4,
h5,
p,
li,
button,
label,
textarea,
a,
input {
  font-family: IBM Plex Sans, serif;
}
h1 {
  font-size: 5rem;
  font-weight: 1000;
  margin: $textMargin 0 $textMargin 0;
}
h2 {
  font-size: 3rem;
  font-weight: 900;
  margin: $textMargin 0 $textMargin 0;
}
h3 {
  font-size: 2rem;
  margin: $textMargin 0 $textMargin 0;
  font-weight: 800;
}
h4 {
  font-size: 1.2rem;
  margin: $textMargin 0 $textMargin 0;
  font-weight: 700;
}
h5 {
  font-size: 1.2rem;
  margin: $textMargin 0 $textMargin 0;
  font-weight: 600;
}
p,
li,
button,
label,
textarea,
a,
input {
  margin: $textMargin 0 $textMargin 0;
  font-size: 1.1rem;
  font-weight: 500;
}
em {
  font-family: IBM Plex Sans Italic, sans-serif;
  font-style: italic;
}
#printButton {
  padding: 0.5rem 5rem 0.5rem 5rem;
  font-weight: bold;
  border: none;
  margin: 0 0 1rem 0;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 0 3px 1px black;
  &:focus {
    outline: none;
  }
  &:active {
    transition: 0.01s !important;
    transform: scale(0.99) !important;
    box-shadow: 0 0 1px 1px black !important;
  }
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 6px 3px black;
  }
}
</style>
