
addEventListener("load", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = innerWidth;
    canvas.height = innerHeight;






    addEventListener("resize", () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
      });
})


