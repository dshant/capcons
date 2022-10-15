import React from "react";
import { Accordion } from "react-bootstrap";

export const ProductDetail = () => {
  return (
    <>
      <div>
        <Accordion className="mb-3" defaultActiveKey="0">
          <Accordion.Item className="mb-3" eventKey="0">
            <Accordion.Header>Description</Accordion.Header>
            <Accordion.Body>
              <p>
                Askating Monk may accept returns on apparel and footwear for
                account credit only. For this purpose Askating Monk must receive
                the merchandise within 14 days from the date it was shipped to
                you. Items must be unused, unworn, unwashed and undamaged by
                you.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="1">
            <Accordion.Header>Details</Accordion.Header>
            <Accordion.Body>
              <p>
                Askating Monk may accept returns on apparel and footwear for
                account credit only. For this purpose Askating Monk must receive
                the merchandise within 14 days from the date it was shipped to
                you. Items must be unused, unworn, unwashed and undamaged by
                you.
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="2">
            <Accordion.Header>Features</Accordion.Header>
            <Accordion.Body>
              <p>
                Askating Monk may accept returns on apparel and footwear for
                account credit only. For this purpose Askating Monk must receive
                the merchandise within 14 days from the date it was shipped to
                you. Items must be unused, unworn, unwashed and undamaged by
                you.
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};
