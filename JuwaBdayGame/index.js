const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
//console.log(gsap)




canvas.width = 1024
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 80) {
collisionsMap.push(collisions.slice(i, 80 + i))
collisions.slice(i, 80 + i)
}

const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 80) {
battleZonesMap.push(battleZonesData.slice(i, 80 + i))

}

const charactersMap = []
for (let i = 0; i < charactersMapData.length; i += 80) {
  charactersMap.push(charactersMapData.slice(i, 80 + i))

  
}

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame);

let gameStarted = false
function startGame() {
    // Hide the start screen
    const startScreen = document.getElementById('startScreen');
    startScreen.style.display = 'none';
    gameStarted = true
  }



const boundaries = []
const offset ={
  x: -250,
  y: -1160
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 5419)
   boundaries.push(
    new Boundary({
      position: {
       x: j * Boundary.width + offset.x,
       y: i * Boundary.height + offset.y
      }
    })
  )}
  )
})


const battleZones = []

battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 5419)
   battleZones.push(
    new Boundary({
      position: {
       x: j * Boundary.width + offset.x,
       y: i * Boundary.height + offset.y
      }
    })
  )}
  )
})


//console.log(battleZones)

const characters = []
const npcLookDown = new Image()
npcLookDown.src = "./img/npcLookDown.png"

const npcLookUp = new Image()
npcLookUp.src = "./img/npcLookUp.png"

const npcLookLeft = new Image()
npcLookLeft.src = "./img/npcLookLeft.png"

const npcLookRight = new Image()
npcLookRight.src = "./img/npcLookRight.png"

const cowNPC = new Image()
cowNPC.src = "./img/cowNPC.png"

const Shubub = new Image()
Shubub.src = "./img/JuwaCharDown.png"

charactersMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
                                                  //1163 npc der nach unten schaut links neben dem haus
    if (symbol === 1163) {
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
         
          frames: {
            max: 4,
            hold: 100
          },
          scale: 1,
          animate: true,
          dialogue: ["Ahuhuhu...", "Juwaaaa Hola qui til...", "today is the day!...", "today is juwa birthday!...",  "i am so ♪♫ hapi hapi hapi ♪♫...", "and woowwww you look super cute today!!!!...", "you know, there is a birthday Party for you today...",
                      "sounds exciting right? i can see that you are excited by the way your ears move!...", "anyways so, the Birthday Party is on the other side of the island...",
                    "but umm.. ", "can i ask you to help me with something?...", "do you see those dark green fields?...", "could you please please please use your strong abilities to remove all of the Monsters there?...",
                    "i know this is a strange request but youre the only one whos strong enough to die them!!...", "Perfect Thank You!!...","there are 3 fields on this island and 2 on the other island...",
                    "you can do this i believe in you!!!...", "Ahuhuhuhuhuhuhuh"],
                    
          
        })
      )
    }

                                                      //1199 einleiter npc. unter dem haus der mit dem rücken zur cam gedreht ist
    else if (symbol === 1199) {
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookUp,
          frames: {
            max: 4,
            hold: 100
          },
          scale: 1,
          animate: true,
          dialogue: ["Waaahuhuhuhu very hellooo Juws Muws Juwbub Jumbub jumum and happy birthday!!...", 
                      "are you doing good today? you look great!...", "many people have gathered here today to celebrate your birthday!...",
                    "i even heard about special guests that only came to see you today!...", "you should go and talk to the others that came to see you, maybe they have some things to tell you",
                  "anyways, HAPOPY BIRTHDEY"]
        })
      )
    }

    else if (symbol === 1197) {         //1197 Npc der links zum meer schaut 1
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookLeft,
          frames: {
            max: 4,
            hold: 70
          },
          scale: 1,
          animate: true,
          dialogue: ["..", "oh JUWA!...", "i didnt notice you because of Jimmy next to me. he talks about weird stuff every time we go to see the ocean...", "i wish you a happy Birthday!...",
                        "oh and also, you look slay today! such a queen purr purrrrr...", "laahuhuhuhu"]
        })
      )
    }
    else if (symbol === 1198) {       //1198 npc der links zum meer schaut 2
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookLeft,
          frames: {
            max: 4,
            hold: 80
          },
          scale: 1,
          animate: true,
          dialogue: [".........", "oi armin....", "if we kill all enemies on the other side of the ocean...", "...will we finally be free?...", "this eren guy is so cool i wish i would be him...", "♪♫  sasageyooo sasageyoooooo♪♫....  ",
                    "Aaaah Juuwaa. . . .", "u is birthday ehh?...", "i wish you eternal freedom and muchos muwos...", "Fahuhuhuu"]
        })
      )
    }

    else if (symbol === 1196) {       //1196 cow über haus 1
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: cowNPC,
          frames: {
            max: 4,
            hold: 150
          },
          scale: 1,
          animate: true,
          dialogue: ["meow meow im a cow i said meow meow im a cow...", ".........", "oh hi JUUUUUUWA...", "muuuuuhhpy muuuuhhday", "i cant stop singing this song since i met this gato on the other island...",
                    "i feel like gato used magic on me so i cant stop singing...", "...", "Muuuhuhuuhuhhu"]
        })
      )
    }

    else if (symbol === 1100) {       //1100 char ganz oben mit rücken zur cam
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookUp,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["..", "...", "ich habe dich schon erwartet Juwa...", "Heute ist dein Geburtstag stimmts?...", "Happy Birthday...", "Ich weiß, dass ist jetzt vielleicht nicht der beste Zeitpunkt aber...", "ein wind der gefahr zieht auf...",
                    "..vielleicht sehen wir uns heute ja wieder...", "von wem ich rede?..", "....", "Drink Gato...", "eine Gato, welche der Legende nach so groß ist, dass sie einen ganzen Ozean austrinken kann...",
                     "egal vergiss was ich gesagt habe. Drink Gato wird wahrscheinlich sowieso nicht erscheinen...", "Genieß deinen Birthday und lass ein Stück Kuchen für mich übrig!...", "Maahuuhuhuhuh"]
        })
      )
    }

    else if (symbol === 1195) {       //1195 cow über haus 2
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: cowNPC,
          frames: {
            max: 4,
            hold: 150
          },
          scale: 1,
          animate: true,
          dialogue: ["Muuhhh Juwa!...", "did you see my friend today?...", "he is behaving a little weird lately since he is talking to this pink cat on the other island...",
                      "maybe you can find the cat and talk to it to find out what they have been talking about...", "Anyways, Muuuuhhhhppyy Muuuhhhday!"]
        })
      )
    }

    else if (symbol === 1194) {       //1195 cow über haus 2
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookLeft,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["i dont know why this cow sings about meow but i like it...","i listen to it for.  .   .  13hours .   .  . now...", "..well uhhh Hi Juwa!...", "are you excited about your birthday?....",
                    "great! im really excited too!...", "i wonder what special guests will be there?", "laaaalalalalalaaa"]
        })
      )
    }

    else if (symbol === 1271) {       //npc auf gehweg nach rechts
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookRight,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["hiyo juwo muwo!...", "you see what direction i am looking to?...", "thats the way to the other island",
                    "so when you finished exploring this island you can come back and follow this pathway...","oh right its your birthday today!...",
                  "el hapy el birthdayo!...", "Auhuhuhuhuh"]
        })
      )
    }
    else if (symbol === 1238) {       //npc auf gehweg nach links
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookLeft,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["Hilio Hillo Halulu Juwa!...", "Oh Du hast Geburtstag?...", "Ok Geburtstag.", "Lababababbaaa"]
        })
      )
    }

    else if (symbol === 1192) {       //vor herz baum links
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["Hi juwa!...", "Diese zwei Bäume sehen schön aus oder?...", "Das erinnert mich an etwas, was du mal gesagt hast!...",
                    "....hust hust....", "~haha stirb pflanze!~...", "~die blume ist einfach gott~...", "~nein das ist keine Blume, die hat Blätter~...",
                  "hihihahahahauhaihuhaihuahiu ein all time classic"]
        })
      )
    }

    else if (symbol === 1193) {       //vor herz baum links
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["ahhhhhh i wishh i wasss a biiiirddddd...", "i wonder what those fruits on the tree taste like"]
        })
      )
    }

    else if (symbol === 1191) {       //brücke
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["thats a really strange looking fish"]
        })
      )
    }

    else if (symbol === 1190) {       //brücke
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["what breed is this fish?...", "its is so big"]
        })
      )
    }

    else if (symbol === 1189) {       //look right island 2
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookRight,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["Oi oii ooiiiiiiii Juwwwkaaa!...","is this quaso gato ?????", "ich komme auch zu deiner birthday party aber...", "aber...","ich muss meinen tee noch trocknen lassen"]
        })
      )
    }

    else if (symbol === 1188) {       //look down island 2 end
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["halulu juws!...", "youre almost there!...", "das ist der letzte fight!"]
        })
      )
    }

    else if (symbol === 1187) {       //look down island 2 end
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["you made it!!!...", "now go to yo birthday party lalalalala"]
        })
      )
    }

    else if (symbol === 1186) {       //look down island 2 end
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["alala koko chumbo ayayeeeeee wohooowww"]
        })
      )
    }

    else if (symbol === 1185) {       //look down island 2 end
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["top 10 most best insane birthday parties i ever seen wowie hahuhuhuhuhu"]
        })
      )
    }

    else if (symbol === 1184) {       //look down island 2 end
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookDown,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["hiihuahuhihuhaiahihauhu what a nice birthday party yyaayyy wowhohohohooo soo greatttttt"]
        })
      )
    }

    else if (symbol === 1183) {       //look up island 2
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: npcLookUp,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["OMG i can see the special guests!!! WOWOWOWOWOWOWWOOW"]
        })
      )
    }

    else if (symbol === 1182) {       //shubub
      characters.push(
        new NPC({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: Shubub,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 1,
          animate: true,
          dialogue: ["Hello its me The bub...", "the bubshub...", "shubshub....", "bub shub shubub bub mub shushu mub bububub...",
                     "you reached the very end of your birthday present...", "the party with them special guests!...", "bana cry gato...", "bana heart gato...", "and idk stand gato look silly and cute...",
                     "also Juwa Juwbub mubub muwbuba boobajuwa boobjuub...","i want to tell you...", "no matter what, i will always be there for you and i will always love you...", "in the good and the bad times, you can always count on me...",
                     "thank you very much for beeing such a wonderfull person i reaallyyy love you...", "its is a pleasure to be your boifren...", "now im gonna qute a poem i told you once...", 
                     "God gave me...", "Eyes not to look at byches but to look at JUWA...", "Mouth not to eat dyck but to kiss JUWA...", "Ears not to hear stopid kyds but to hear JUWA...",
                     "Hands to slap juwa ass...", "Happy Birthday my love!"]
        })
      )
    }
    
  })
})







const image = new Image()
image.src = "./img/JuwgameMap8040.png"


const foregroundImage = new Image()
foregroundImage.src = "./img/foreground8040.png"

const playerDownImage = new Image()
playerDownImage.src = "./img/JuwaCharDown.png"

const playerUpImage = new Image()
playerUpImage.src = "./img/JuwaCharUp.png"

const playerLeftImage = new Image()
playerLeftImage.src = "./img/JuwaCharLeft.png"

const playerRightImage = new Image()
playerRightImage.src = "./img/JuwaCharRight.png"

const player = new Character({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  }, 
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 30
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    down: playerDownImage,
    right: playerRightImage
  }
 })

const background = new Sprite({
    position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
  x: offset.x,
  y: offset.y
},
image: foregroundImage
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
    
}




const movables = [background, ...boundaries, foreground, ...battleZones, ...characters]

const renderables = [background, ...boundaries, ...battleZones, ...characters, player, foreground]

const battle = {
  initiated: false
}

function animate () {
    const animationId = window.requestAnimationFrame(animate)
    //console.log(animationId)
    renderables.forEach((renderable) => {
      renderable.draw()
    })

    let moving = true
    player.animate = false

    //console.log(animationId)

 if (battle.initiated) return    

 //activate battle    
 if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {
  for (let i = 0; i < battleZones.length; i++) {
    const battleZone = battleZones[i]

    const overlappingArea = (Math.min(player.position.x + player.width, battleZone.position.x + battleZone.width) -
    
    Math.max(player.position.x, battleZone.position.x)) *

    (Math.min(player.position.y + player.height, battleZone.position.y + battleZone.height) -

    Math.max(player.position.y, battleZone.position.y))
    
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: battleZone
      }) &&
      overlappingArea > (player.width * player.height) / 2
      && Math.random() < 0.008
      
    ) {
      console.log("activate battle")

      window.cancelAnimationFrame(animationId)

      audio.Map.stop()
      audio.initBattle.play()
      audio.battle.play()

      battle.initiated = true
      gsap.to("#overlappingDiv", {
        opacity: 1,
        repeat: 4,
        yoyo: true,
        duration: 0.3,
        onComplete() {
          gsap.to("#overlappingDiv", {
            opacity: 1,
            duration: 0.3,
            onComplete() {
              initBattle()
              animateBattle()
              gsap.to("#overlappingDiv", {
                opacity: 0,
                duration: 0.3,
                
              })
            }
          })

        

          
        }
      })
      break
    }
  }
}  



if (keys.w.pressed) {
  player.animate = true
  player.image = player.sprites.up

  checkForCharacterCollision({
    characters,
    player,
    characterOffset: { x: 0, y: 3}
  })


  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i]
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {...boundary, 
        position: {
         x: boundary.position.x,
         y: boundary.position.y + 3
      }}
      })
    ) {
      console.log("colliding")
      moving = false
      break
    }
  }

  

if (moving)
 movables.forEach((movable) => {
    movable.position.y += 0.7
  })}



  else if (keys.a.pressed) {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3}
    })

    for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i]
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {...boundary, 
        position: {
         x: boundary.position.x + 3,
         y: boundary.position.y + 3
      }}
      })
    ) {
      console.log("colliding")
      moving = false
      break
    }
  }
if (moving)
  movables.forEach((movable) => {
  movable.position.x += 0.7
})}




else if (keys.d.pressed) {
  player.animate = true
  player.image = player.sprites.right

  checkForCharacterCollision({
    characters,
    player,
    characterOffset: { x: 0, y: 3}
  })

  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i]
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {...boundary, 
        position: {
         x: boundary.position.x -1,
         y: boundary.position.y
      }}
      })
    ) {
      console.log("colliding")
      moving = false
      break
    }
  }
if (moving)
 movables.forEach((movable) => {
  movable.position.x -= 0.7
})}


else if (keys.s.pressed) {
  player.animate = true
  player.image = player.sprites.down

  checkForCharacterCollision({
    characters,
    player,
    characterOffset: { x: 0, y: 3}
  })

  for (let i = 0; i < boundaries.length; i++) {
    const boundary = boundaries[i]
    if (
      rectangularCollision({
        rectangle1: player,
        rectangle2: {...boundary, 
        position: {
         x: boundary.position.x,
         y: boundary.position.y - 3
      }
    }
  })
)  {
      console.log("colliding")
      moving = false
      break
    }
  }
  if (moving)
    movables.forEach((movable) => {
      movable.position.y -= 0.7
      })
  }
}

    
//animate()




let lastKey = " "
window.addEventListener("keydown", (e) => {
  if (player.isInteracting) {
    audio.talk.play()
    switch (e.key) {
      case " ":
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector("#characterDialogueBox").innerHTML = 
          player.interactionAsset.dialogue[dialogueIndex]
          return
        }
        //finish convo
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector("#characterDialogueBox").style.display = "none"

        break
    }
    return
  }
  
  
  
   switch (e.key) {
    case " ":
      if (!player.interactionAsset) return
      

      //beginning the convo

      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector("#characterDialogueBox").innerHTML = firstMessage
      document.querySelector("#characterDialogueBox").style.display = "flex"
      player.isInteracting = true
      break
      


    case "w":
      keys.w.pressed = true
      lastKey = "w"
      break
      
      case "a":
      keys.a.pressed = true
      lastKey = "a"
      break
      
      case "s":
      keys.s.pressed = true
      lastKey = "s"
      break
      
      case "d":
      keys.d.pressed = true
      lastKey = "d"
      break
  }
})



    //console.log(keys)
        


window.addEventListener ("keyup", (e) => {
    switch (e.key) {
      case "w":
        keys.w.pressed = false
        break 
        
      case "a":
        keys.a.pressed = false
        break
      
      case "s":
        keys.s.pressed = false
        break
      
      case "d":
        keys.d.pressed = false
        break
    }})
let clicked = false
addEventListener("click", () => {
  if (!clicked) {
  audio.Map.play()
  clicked = true
}
})


