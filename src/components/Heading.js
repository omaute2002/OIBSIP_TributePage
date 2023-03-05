import React from "react";
import "./styles.css";

function Heading() {
  return (
    <>
      <section id="heading">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center py-4">
              <img src="./images/pele.jpeg" alt="pele-image" />
            </div>
            <div className="col-md-6 ">
              <h2 className="promo-title text-center">Pelé</h2>
              <p>
                Pelé, byname of Edson Arantes do Nascimento, (born October 23,
                1940, Três Corações, Brazil—died December 29, 2022, São Paolo,
                Brazil), Brazilian football (soccer) player, in his time
                probably the most famous and possibly the best-paid athlete in
                the world. He was part of the Brazilian national teams that won
                three World Cup championships (1958, 1962, and 1970).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------- Early Life ----------------------------------- */}

      <section id="life">
        <div className="container" id="more">
          <h3 className="title text-center font-weight-bold">Early Life</h3>
          <hr />
          <p>
            After playing for a minor league club at Bauru, São Paulo state,
            Pelé (whose nickname apparently is without significance) was
            rejected by major club teams in the city of São Paulo. In 1956,
            however, he joined the Santos Football Club, which, with Pelé at
            inside left forward, won nine São Paulo league championships and, in
            1962 and 1963, both the Libertadores Cup and the Intercontinental
            Club Cup. Sometimes called “Pérola Negra” (“Black Pearl”), he became
            a Brazilian national hero. He combined kicking power and accuracy
            with a remarkable ability to anticipate other players’ moves. After
            the 1958 World Cup, Pelé was declared a national treasure by the
            Brazilian government in order to ward off large offers from European
            clubs and ensure that he would remain in Brazil. On November 19,
            1969, in his 909th first-class match, he scored his 1,000th goal.
          </p>
        </div>
      </section>

      {/* ----------------------------Career-------------------------------------- */}

      <section id="career">
        <div className="container" id="more">
          <h3 className="title text-center font-weight-bold">Career</h3>
          <hr />
          <p>
            Pelé made his international debut in 1957 at age 16 and the
            following year played his first game in the World Cup finals in
            Sweden. The Brazilian manager was initially hesitant to play his
            young star. When Pelé finally reached the field, he had an immediate
            impact, rattling the post with one shot and collecting an assist. He
            had a hat trick in the semifinal against France and two goals in the
            championship game, where Brazil defeated Sweden 5–2. At the 1962
            World Cup finals, Pelé tore a thigh muscle in the second match and
            had to sit out the remainder of the tournament. Nonetheless, Brazil
            went on to claim its second World Cup title. Rough play and injuries
            turned the 1966 World Cup into a disaster for both Brazil and Pelé,
            as the team went out in the first round, and he contemplated
            retiring from World Cup play. Returning in 1970 for one more World
            Cup tournament, he teamed with young stars Jairzinho and Rivelino to
            claim Brazil’s third title and permanent ownership of the Jules
            Rimet Trophy. Pelé finished his World Cup career having scored 12
            goals in 14 games.
          </p>
        </div>
      </section>


      <section className="footer">
          <h3 className="footer-title text-center">Thank You!</h3>
      </section>
    </>
  );
}

export default Heading;
