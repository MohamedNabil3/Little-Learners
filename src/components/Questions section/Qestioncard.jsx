import React, { useState } from "react";
import { Toast, Button, Collapse } from "react-bootstrap";
import Minusbtn from "./Minusbtn";
import Plusbtn from "./Plusbtn";

function Qestioncard({ title, body }) {
  const [open, setOpen] = useState(false);

  return (
    <Toast
      style={{
        minWidth: "100%",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
        marginBottom: "12px",
        backgroundColor: open ? "#FFFFFF" : "#fdece7",
      }}
    >
      <Toast.Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          backgroundColor: "transparent",
          borderBottom: "none",
        }}
      >
        <strong
          style={{
            fontWeight: "600",
            fontSize: "1.1rem",
            color: "#333",
          }}
        >
          {title}
        </strong>

        <Button
          variant="light"
          size="sm"
          onClick={() => {
            setOpen(!open);
          }}
          aria-controls="faq-body"
          aria-expanded={open}
          style={{
            border: "1px solid #999",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            padding: 0,
            fontWeight: "bold",
            fontSize: "18px",
            lineHeight: "1",
            backgroundColor: "#fff",
            color: "#333",
          }}
        >
          {open ? <Minusbtn /> : <Plusbtn />}
        </Button>
      </Toast.Header>

      <Collapse in={open}>
        <div id="faq-body">
          <Toast.Body
            style={{
              fontSize: "1rem",
              fontWeight: "500",
              lineHeight: "1.6",
              color: "#444",
              borderTop: "1px solid #ccc",
              marginTop: "8px",
              paddingTop: "12px",
              backgroundColor: "#FFFFFF",
              borderRadius: "0 0 12px 12px",
            }}
          >
            {body}
          </Toast.Body>
        </div>
      </Collapse>
    </Toast>
  );
}

export default Qestioncard;
