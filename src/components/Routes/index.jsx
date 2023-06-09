import { Home } from "src/components/pages/Home";
import { About } from "src/components/pages/About";
import { Switch, Route } from "wouter";
import { Models } from "../pages/Models";
import { OurTeam } from "../pages/OurTeam";
import { Opinions } from "../pages/Opinions";
import { Contact } from "../pages/Contact";
import { Error } from "../Error";

export const RoutesPage = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/acerca" component={About} />
        <Route path="/modelos" component={Models} />
        <Route path="/nuestro-equipo" component={OurTeam} />
        <Route path="/testimonios" component={Opinions} />
        <Route path="/contacto" component={Contact} />
        <Route>
          <Error error="!Oops Error 404 Página no encontrada"/>
        </Route>
      </Switch>
    </>
  );
};
