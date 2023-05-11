function luckyDraw(player) {
    return new Promise((resolve, reject) => {
      const win = Boolean(Math.round(Math.random()));
  
      process.nextTick(() => {
        if (win) {
          resolve(`${player} won a prize in the draw!`);
        } else {
          reject(new Error(`${player} lost the draw.`));
        }
      });
    });
  }

  async function getResults() {
    try {
      const players = ['Tina', 'Jorge', 'Julien'];
  
      const promises = players.map(player => luckyDraw(player));
      const results = await Promise.all(promises);
  
      results.forEach(result => {
        console.log(result);
      });
    } catch (error) {
      console.error(error.message);
    }
  }
  
  
  getResults();