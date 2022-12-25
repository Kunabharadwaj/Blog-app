import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1660544287010-3310dd69e12f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
          alt="pic"
        />
        <div className="user">
          <img
            src="https://media.licdn.com/dms/image/C4E22AQFUyeFQULM8tQ/feedshare-shrink_800/0/1666612006263?e=1674691200&v=beta&t=4S-A0owruCSQptg9cG4BOvpAcj_YudK6NRtLZLTz5gc"
            alt="user"
          />
          <div className="info">
            <span>Kuna</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
          maiores sit eligendi placeat iure? Exercitationem dolorum, quasi
          maiores, error ab vel quisquam, a optio est quis eius excepturi
          delectus officiis.
        </h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham.
        </p>
      </div>
      <Menu/>
    </div>
  );
}

export default Single;
