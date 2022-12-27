const Home = (auth) => {
  let page = null;

  switch (auth) {
    case true:
      page = (
        <div className="home">
          <h1>Welcome!</h1>
        </div>
      );
      break;
    default:
      page = (
        <div className="home">
          <h1>Home</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            finibus mi id nulla suscipit tristique. Quisque egestas metus a
            pretium vestibulum. Morbi semper est sapien, sit amet ullamcorper ex
            ultricies eu. In sollicitudin leo in libero tristique porttitor.
            Mauris accumsan urna tincidunt mi euismod, et rutrum mi euismod.
            Nulla facilisi. Donec eu neque laoreet, venenatis erat ut, aliquet
            velit. Proin posuere aliquam consequat. Praesent nulla odio,
            eleifend eget vestibulum quis, semper sed elit. Praesent maximus
            nisi neque, vel volutpat tortor lacinia non. Suspendisse nulla
            ligula, maximus ac convallis quis, dignissim non justo. Proin nec
            leo odio. Suspendisse consectetur, urna a tempor tempus, risus nunc
            feugiat leo, nec volutpat nulla turpis vel risus. Aenean varius
            dapibus arcu, vel maximus diam laoreet nec.
          </p>
        </div>
      );
  }

  return page;
};

export default Home;
