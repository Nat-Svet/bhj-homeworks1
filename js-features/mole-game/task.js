(() => {
    let playing = true,
        activeHole = 1,
        score = 0,
        misses = 0;

    const getHole = index => document.getElementById(`hole${index}`),
        deactivateHole = index => getHole(index).className = 'hole',
        activateHole = index => getHole(index).className = 'hole hole_has-mole',

        updateStatistics = () => {
            const scoreBoard = document.getElementById('dead');
            const missesBoard = document.getElementById('lost');
            scoreBoard.textContent = score;
            missesBoard.textContent = misses;
        },

        endGame = (message) => {
            alert(message);
            playing = false;
            restartGame();

        },

        next = () => setTimeout(() => {
            if (!playing) return; 
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            next(); 
        }, 800),

        restartGame = () => {
            playing = true; 
            score = 0; 
            misses = 0; 
            updateStatistics(); 
            next(); 
        };

    
    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = () => {
            if (!playing) return; 

            
            if (getHole(i).classList.contains("hole_has-mole")) { 
                score++;
                if (score === 10) { 
                    endGame("Победа!");
                }
            } else { 
                misses++;
                if (misses === 5) { 
                    endGame("Вы проиграли!");
                }
            }
            
            updateStatistics();
        };
    }

    next(); 
})();