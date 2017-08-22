const picker = function(config) {
  /*
    config:
      parent
      sectionMap: [
        { btn, section }
      ]
  */
  let template = `
    <section class='picker'>
      <section class='picker-nav'></section>
      <section class='pick'></section>
    </section>
  `;

  let $html = $(template);

  $(config.parent).append($html);
}

const pickerNavBtn = function(config) {
  /*
    config:
      parent,
      content: { icon }
      bindTo
    NOTE: relies on font-awesome
  */
  let template = `
    <div>
      <a href="">
        <span class="fa-stack">
          <i class="fa fa-circle fa-stack-2x"></i>
          <i class="fa ${config.content.icon} fa-stack-1x fa-inverse" aria-hidden="true"></i>
        </span>
      </a>
    </div>
  `;

  let $html = $(template);

  $html.on('click', 'a', function(e) {
    e.preventDefault();
    $(this).addClass('active');
    $(config.bindTo).removeClass('hidden');
  })

  $(config.parent).append($html);
}

const pick = function(config) {
  /*
    config:
      parent,
      content (data)
  */
  let template = `
    <form>
      <label for="list">${config.content.name}</label>
      <select name="list"></select>
      <input class="btn btn-primary" type="submit" value="Add">
    </form>
  `;

  let $html = $(template);

  config.content.data.forEach(opt=> {
    $html.find('select').append($(
      `<option value=${opt.id}>${opt.name}</option>`
    ))
  })

  $html.on('click', 'input', function(e) {
    e.preventDefault();
    // do stuff
  })

  $(config.parent).append($html);
}
