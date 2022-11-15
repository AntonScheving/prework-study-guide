var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (var x = 0; x < topics.length; x++) {
      console.log(topics[x]);
    }
   }

function selectTopic() {
    if (randomTopic === 'HTML') {
   console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
   console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
   console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
   console.log("Let's study JavaScript!");
     } else {
   console.log('Please try again!');
 }
}
console.log('Here are the topics we learned through Prework:');
    listTopics();

console.log('Which topic should we study first?');
    selectTopic();


/*var topic = "HTML"

if (topic === 'HTML') {
    console.log("Let's study HTML!");
    } else if (topic === 'CSS') {
    console.log("Let' study CSS!");
    } else if (topic === 'Git') {
    console.log("Let' study Git");
    } else if (topic === 'JavaScript') {
    console.log("Let's study JavaScript");
    } else {
        console.log('Please try again!');
    }

    var topic = ["HTML", "CSS", "Git", "JavaScript"];
        for(var x = 0; x < topic.length; x++) {
          console.log(topic[x]);
    }

    function listTopics() {
        for (var x = 0; x < topics.length; x++) {
          console.log(topics[x]);
        }
      }

      function selectTopic() {
        if (topic === 'HTML') {
          console.log("Let's study HTML!");
        } else if (topic === 'CSS') {
          console.log("Let's study CSS!");
        } else if (topic === 'Git') {
          console.log("Let's study Git!");
        } else if (topic === 'JavaScript') {
          console.log("Let's study JavaScript!");
        } else {
          console.log('Please try again!');
        }
      }*/