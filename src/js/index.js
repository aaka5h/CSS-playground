const skills = [
  {
    id: "js",
    value: 87,
  },
  {
    id: "css",
    value: 70,
  },
  {
    id: "node",
    value: 45,
  },
  {
    id: "problem-solving",
    value: 60,
  },
  {
    id: "git",
    value: 80,
  },
  {
    id: "sw-design",
    value: 55,
  },
  {
    id: "mongo-db",
    value: 40,
  },
];
(function () {
  // js code here
  console.log("starting execution");
  var skillsContainer = document.querySelector(".skill-list");
  skills.forEach((skill) => {
    const progress = skillsContainer.querySelector(
      `#${skill.id} .skill-meter__progress`
    );
    if (progress) {
      console.log(progress);
      progress.style.width = `${skill.value}%`;
    }
  });
})();
