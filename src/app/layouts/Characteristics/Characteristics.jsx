import React from "react";

import Table from "../../components/Table/Table";

const Characteristics = () => {
    return (
        <section className="characteristics" id="characteristic">
            <div className="characteristics__container">
                <h2 className="characteristics__title">Чому саме композитна арматура?</h2>
                <p className="characteristics__description">Мінімальна міцність арматури при розтязі в тоннах</p>
                <Table/>
            </div>
        </section>
    )
}

export default Characteristics;
