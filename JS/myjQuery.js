$(() => {
  console.log("hello to console");
  $("p:first").click(() => {
    console.log("clicked");
  });
  $("#idTag").click(() => {
    console.log("clicked");
  });
  $(".classTag").click(() => {
    console.log("clicked");
    $(this).hide();
  });
  $(".tag1").on({
    click: () => {
      console.log("clicked");
    },
    mouseenter: () => {
      console.log("mouse entered");
    },
  });
//   $('#btn').click(() => {
//       $('p').toggle(1000);
//   })
  $('#btn').click(() => {
      $('p').slideToggle(1000);
  })
});
