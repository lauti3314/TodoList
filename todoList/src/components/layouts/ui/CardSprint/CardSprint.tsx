import { Button, Card } from "react-bootstrap";
import styles from "./CardSprint.module.css";
export const CardSpring = () => {
  return (
    <>
      <div className={styles.cardSprintContainer}>
        <Card
          style={{
            width: "18rem",
            cursor: "pointer",
            borderRadius: "10px",
          }}
          className="mb-2"
        >
          <Card.Body className={styles.bodyCard}>
            <Card.Title className={styles.cardSprintTitle}>
              {" "}
              Sprint 1{" "}
            </Card.Title>
            <Card.Text className={styles.cardContainer}>
              <p>Fecha de inicio: </p>
              <p>Fecha de cierre: </p>
            </Card.Text>
            <div className={styles.cardButtons}>
              <Button className="d-flex align-items-center" variant="warning">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  visibility
                </span>
              </Button>
              <Button className="d-flex align-items-center" variant="primary">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  edit
                </span>
              </Button>
              <Button className="d-flex align-items-center" variant="danger">
                <span
                  className="material-symbols-outlined"
                  style={{ color: "black" }}
                >
                  delete
                </span>
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
