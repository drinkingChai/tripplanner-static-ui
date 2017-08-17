// $(document).ready(()=> {
// })

let buttonMap = ['hotels', 'food', 'activities'];

buttonMap.forEach(i=> {
  let button = `.show-${i}`,
    section = `.pick.${i}`;
  $(button).click(e=> {
    e.preventDefault();
    $(`.picker .active`).removeClass('active');
    $(button).addClass('active');
    $('.pick').addClass('hidden');
    console.log(section);
    $(section).removeClass('hidden');
  });
})
