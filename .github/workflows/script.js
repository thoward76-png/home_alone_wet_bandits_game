/**
 * Wet Bandits Return – Bay Hill Drive
 * Narrative, scene-based kids game
 * Kevin avatar + snowfall + police siren finale
 */

// =========================
//  SCENE DATA
// =========================

const scenes = [
  {
    id: 1,
    title: "Rumors on Bay Hill Drive…",
    story:
      "Rumor is the Wet Bandits broke out of jail. Again. And guess where they’re headed? Bay Hill Drive. Something sneaky showed up in the yard. Which one is a sign those burglars are back?",
    choices: ["Pizza Delivery Car", "Wet Bandits Van", "Cousin Eddie's RV"],
    correctIndex: 1,
    kevinOnCorrect:
      "Yep. That rusty van isn’t here for Christmas carols. They’re scouting the place.",
    kevinOnWrong:
      "Not that one. Think about who’s actually after the house, not just who brings the food.",
    clipText:
      "You spot the Wet Bandits’ van creeping along Bay Hill Drive, parking in the yard like it owns the place."
  },
  {
    id: 2,
    title: "Fuel for the Fight",
    story:
      "I can’t defend the house on an empty stomach. Before we get serious, who am I calling for backup… in pizza form?",
    choices: ["Pizza Delivery Car", "Hot Door Handle", "Paint Cans"],
    correctIndex: 0,
    kevinOnCorrect:
      "Correct. Cheese pizza, just for me. Then we booby-trap everything.",
    kevinOnWrong: "Try again. I can’t eat a doorknob. Or paint.",
    clipText:
      "The Little Nero’s car pulls up, headlights glowing as a hot cheese pizza arrives at the front of the house."
  },
  {
    id: 3,
    title: "Make the House Look Occupied",
    story:
      "If they think someone’s home, they might chicken out. What do we set up first to scare them away?",
    choices: [
      "TV with 'Angels with Filthy Souls'",
      "Hot Door Handle",
      "Fake Party Silhouettes"
    ],
    correctIndex: 2,
    kevinOnCorrect:
      "Exactly. Nothing scares burglars like a house packed with dancing silhouettes.",
    kevinOnWrong:
      "Close, but not yet. Think windows. Lights. Shadows. The whole ‘we’re totally home’ vibe.",
    clipText:
      "Silhouettes start dancing in the right-side windows, casting wild shadows like there’s a party in full swing."
  },
  {
    id: 4,
    title: "Turn Up the Noise",
    story:
      "Visuals are good, but we need sound. Loud sound. What should we use to make these guys think twice?",
    choices: [
      "Hot Door Handle",
      "Paint Cans",
      "TV with 'Angels with Filthy Souls'"
    ],
    correctIndex: 2,
    kevinOnCorrect:
      "Nice. Nothing like a fake gangster movie to make crooks rethink their life choices.",
    kevinOnWrong:
      "Nope. Think less ‘physical trap’ and more ‘loud, slightly terrifying audio track.’",
    clipText:
      "The TV screen flashes as 'Keep the change, ya filthy animal!' echoes across the yard."
  },
  {
    id: 5,
    title: "Slip and Slide Entrance",
    story:
      "Here come Harry and Marv, shuffling toward the front steps like they own the place. Time to make that a bad idea.",
    choices: ["Hot Door Handle", "Icy Steps", "Broken Ornaments"],
    correctIndex: 1,
    kevinOnCorrect:
      "Perfect. Nothing says 'go home' like landing on your back in front of the whole neighborhood.",
    kevinOnWrong:
      "Not that one. Think outside. First thing they hit before they even get to the door.",
    clipText:
      "The front steps shimmer with a slick layer of ice, just waiting for a couple of overconfident crooks."
  },
  {
    id: 6,
    title: "Handle With Care",
    story:
      "Somehow they’re still determined. They’ll be reaching for that front doorknob any second now. What’s our next move?",
    choices: ["Hot Door Handle", "Spider", "Broken Ornaments"],
    correctIndex: 0,
    kevinOnCorrect:
      "Oh yeah. Nothing like a branded handprint to remember the night by.",
    kevinOnWrong:
      "Nope. Think about the very first thing they touch when they finally grab the door.",
    clipText:
      "The front doorknob glows red-hot, waiting for Harry to grab it with full confidence and zero gloves."
  },
  {
    id: 7,
    title: "Barefoot Bad Idea",
    story:
      "They’ve made it inside and they’re losing their shoes. Time to turn the floor into a minefield.",
    choices: ["Broken Ornaments", "Paint Cans", "Spider"],
    correctIndex: 0,
    kevinOnCorrect:
      "Exactly. You’d think they’d learn to wear socks. Or boots. Or literally anything.",
    kevinOnWrong:
      "Try again. This one lives on the ground, not swinging from above or crawling around.",
    clipText:
      "Shiny ornaments glint across the floor near Kevin’s tree, turning every barefoot step into instant regret."
  },
  {
    id: 8,
    title: "Heads Up on the Stairs",
    story:
      "They’re chasing me up the stairs. Time for the most satisfying trap of the night.",
    choices: ["Paint Cans", "Spider", "Old Man Marley"],
    correctIndex: 0,
    kevinOnCorrect:
      "Nice. Nothing like a full paint can to the face to slow somebody down.",
    kevinOnWrong:
      "Not yet. This one isn’t a friend or a creepy crawler. It’s heavy. And it swings.",
    clipText:
      "Paint cans swing from the balcony over the side entrance, slamming straight into the charging Wet Bandits."
  },
  {
    id: 9,
    title: "Their Worst Fear",
    story:
      "They’ve made it upstairs. Time to use the one thing they’re actually terrified of.",
    choices: ["Paint Cans", "Old Man Marley", "Spider"],
    correctIndex: 2,
    kevinOnCorrect: "Bingo. Big tough guys, taken out by one little spider.",
    kevinOnWrong:
      "Nope. Think smaller. Eight legs. A lot of screaming.",
    clipText:
      "The spider crawls onto a Bandit’s face, triggering a high-pitched scream that probably wakes the whole block."
  },
  {
    id: 10,
    title: "Last-Second Save",
    story:
      "They finally catch up to me. Not ideal. But I’ve got backup on Bay Hill Drive.",
    choices: ["Santa Claus", "Old Man Marley", "Cousin Eddie"],
    correctIndex: 1,
    kevinOnCorrect:
      "Exactly. Never underestimate the guy with the shovel.",
    kevinOnWrong:
      "Not that one. Think about the neighbor everyone was scared of… until he became the hero.",
    clipText:
      "Old Man Marley steps out of the shadows, shovel in hand, knocking the Wet Bandits out cold."
  },
  {
    id: 11,
    title: "Back Where They Belong",
    story:
      "Cops are here. The Bandits are busted. One last question: after all this, where are they headed now?",
    choices: ["Back to jail", "Off to rob another house", "On a beach vacation"],
    correctIndex: 0,
    kevinOnCorrect:
      "You got it. Back behind bars. Again. Maybe this time they’ll stay there.",
    kevinOnWrong:
      "Nope. I didn’t do all this so they could hit another house or catch some sun.",
    clipText:
      "The Wet Bandits sit handcuffed in the back of a police car, soaking wet and furious as the lights flash down Bay Hill Drive."
  }
];

// =========================
//  DOM REFERENCES
// =========================

const startScreenEl = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const gameScreenEl = document.getElementById("game-screen");

const stepIndicatorEl = document.getElementById("step-indicator");
const sceneTitleEl = document.getElementById("scene-title");
const storyTextEl = document.getElementById("story-text");
const choicesEl = document.getElementById("choices");
const feedbackTextEl = document.getElementById("feedback-text");
const clipPanelEl = document.getElementById("clip-panel");
const clipTextEl = document.getElementById("clip-text");

const progressInnerEl = document.getElementById("progress-bar-inner");
const progressLabelEl = document.getElementById("progress-label");
const restartBtn = document.getElementById("restart-btn");
const footprintsEl = document.getElementById("footprints");

// Audio hooks (you can point these at real files later)
const sndCorrect = document.getElementById("snd-correct");
const sndWrong = document.getElementById("snd-wrong");
const sndSiren = document.getElementById("snd-siren");

// =========================
//  STATE
// =========================

let currentSceneIndex = 0;
let sceneLocked = false;

// =========================
//  FOOTPRINTS
// =========================

function initFootprints() {
  footprintsEl.innerHTML = "";
  for (let i = 0; i < scenes.length; i++) {
    const fp = document.createElement("div");
    fp.className = "footprint";
    footprintsEl.appendChild(fp);
  }
}

function updateFootprints(forceComplete = false) {
  const total = scenes.length;
  const current = forceComplete ? total - 1 : currentSceneIndex;
  const nodes = Array.from(document.querySelectorAll(".footprint"));
  nodes.forEach((fp, idx) => {
    if (idx <= current) {
      fp.classList.add("active");
    } else {
      fp.classList.remove("active");
    }
  });
}

// =========================
//  RENDERING
// =========================

function renderScene() {
  const scene = scenes[currentSceneIndex];
  stepIndicatorEl.textContent = `Scene ${scene.id} of ${scenes.length}`;
  sceneTitleEl.textContent = scene.title;
  storyTextEl.textContent = scene.story;

  feedbackTextEl.textContent = "";
  clipTextEl.textContent = "";
  clipPanelEl.classList.remove("visible");

  sceneLocked = false;
  document.body.classList.remove("kevin-smirk", "siren-mode");

  // Choices
  choicesEl.innerHTML = "";
  scene.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.dataset.index = idx.toString();
    btn.addEventListener("click", onChoiceClick);
    choicesEl.appendChild(btn);
  });

  updateProgress();
  updateFootprints();
}

// =========================
//  CHOICE HANDLER
// =========================

function onChoiceClick(e) {
  if (sceneLocked) return;

  const scene = scenes[currentSceneIndex];
  const clickedIndex = parseInt(e.currentTarget.dataset.index, 10);
  const buttons = Array.from(document.querySelectorAll(".choice-btn"));

  if (clickedIndex === scene.correctIndex) {
    sceneLocked = true;

    // Style the selected vs others
    buttons.forEach((btn, idx) => {
      if (idx === clickedIndex) {
        btn.classList.add("correct-locked");
      } else {
        btn.classList.add("disabled");
      }
    });

    feedbackTextEl.textContent = scene.kevinOnCorrect;
    clipTextEl.textContent = scene.clipText;
    clipPanelEl.classList.add("visible");

    // SFX if you add sources
    if (sndCorrect && sndCorrect.src) {
      sndCorrect.currentTime = 0;
      sndCorrect.play().catch(() => {});
    }

    // Kevin smirk animation pulse
    document.body.classList.add("kevin-smirk");
    setTimeout(() => document.body.classList.remove("kevin-smirk"), 700);

    // Move to next scene after a short pause
    setTimeout(() => {
      if (currentSceneIndex < scenes.length - 1) {
        currentSceneIndex++;
        renderScene();
      } else {
        showFinalWin();
      }
    }, 1500);
  } else {
    // Wrong answer
    feedbackTextEl.textContent = scene.kevinOnWrong;
    if (sndWrong && sndWrong.src) {
      sndWrong.currentTime = 0;
      sndWrong.play().catch(() => {});
    }
  }
}

// =========================
//  FINAL WIN STATE
// =========================

function showFinalWin() {
  stepIndicatorEl.textContent = "Battle Plan Complete";
  sceneTitleEl.textContent = "You Saved Bay Hill Drive";
  storyTextEl.textContent =
    "Every trap landed. Every scream was worth it. The Wet Bandits are back behind bars, and the Howard home is safe for another Christmas.";

  feedbackTextEl.textContent =
    "You saved Bay Hill Drive. Again. Maybe they’ll learn… probably not.";

  clipTextEl.textContent =
    "The police car pulls away, lights flashing, while the house glows with Christmas lights and victory.";
  clipPanelEl.classList.add("visible");

  choicesEl.innerHTML = "";
  updateProgress(true);
  updateFootprints(true);

  // Police light effect
  document.body.classList.add("siren-mode");

  if (sndSiren && sndSiren.src) {
    sndSiren.currentTime = 0;
    sndSiren.play().catch(() => {});
  }
}

// =========================
//  PROGRESS BAR
// =========================

function updateProgress(forceComplete = false) {
  const total = scenes.length;
  const current = forceComplete ? total : currentSceneIndex + 1;
  const percent = (current / total) * 100;
  progressInnerEl.style.width = `${percent}%`;
  progressLabelEl.textContent = `Scene ${current} of ${total}`;
}

// =========================
//  GAME FLOW
// =========================

function restartAdventure() {
  currentSceneIndex = 0;
  sceneLocked = false;

  document.body.classList.remove("siren-mode");
  if (sndSiren && !sndSiren.paused) {
    sndSiren.pause();
  }

  renderScene();
}

function startGame() {
  startScreenEl.classList.add("hidden");
  gameScreenEl.classList.remove("hidden");
  restartAdventure();
}

// =========================
//  SNOW GENERATION
// =========================

function createSnow(layerId, count, sizeClass) {
  const container = document.getElementById(layerId);
  if (!container) return;

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.className = `snowflake ${sizeClass}`;
    span.textContent = "✻";

    const left = Math.random() * 100;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * -20;
    const drift = (Math.random() * 40 - 20) + "px";

    span.style.left = left + "%";
    span.style.animationDuration = duration + "s";
    span.style.animationDelay = delay + "s";
    span.style.setProperty("--drift", drift);

    container.appendChild(span);
  }
}

// =========================
//  INIT
// =========================

function init() {
  initFootprints();
  updateFootprints();

  startBtn.addEventListener("click", startGame);
  restartBtn.addEventListener("click", restartAdventure);

  createSnow("snow-back", 35, "big");
  createSnow("snow-front", 55, "small");
}

// Kick everything off once DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
