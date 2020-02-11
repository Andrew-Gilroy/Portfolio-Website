var tl = new TimelineLite();
tl.staggerFrom(".child-image", 1.5, {scale:1.5, y:-650, rotate: -45}, 0.8).staggerFrom(tl.add( TweenLite.to(".child-image", 3, {y:40, ease: "back.inOut(1.7)", repeat: -1, yoyo: true})));

var tl = new TimelineMax(); 
tl.staggerTo(".box", 1, {
  cycle:{
    //an array of values
    backgroundColor:["red", "white", "#00f"],
    //function that returns a value
    y:function(index){
      console.log(index)
      return Math.random() * 300;
    }
  }
}, 0.5);