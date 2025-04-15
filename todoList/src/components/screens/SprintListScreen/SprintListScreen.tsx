import { useEffect } from "react";
import { useSprint } from "../../../hooks/useSprint";
import { Header } from "../../layouts/Header/Header"
import { CardSprint } from "../../layouts/ui/CardSprint/CardSprint";
import { ISprint } from "../../../types/ITodo";
import styles from "./SprintListScreen.module.css";
import { Button } from "react-bootstrap";


export const SprintListScreen = () => {
  
  const { sprints, getSprints } = useSprint();
  
    useEffect(() => {
      getSprints(); 
    }, [getSprints]);
  
  return (
    <div className={styles.sprintListScreenContainer}>
      <Header/>
      <div className={styles.titleSprintList}>
        <h3>
          Lista de sprints: 
        </h3>
        <div className={styles.addSprintButton}>
          <Button variant="primary">
            Agregar Sprint
            <span className="material-symbols-outlined">add</span>
          </Button>
        </div>
      </div>
      <div className={styles.mainSprintListScreen}>
         {sprints.map((sprint : ISprint) => (
            <CardSprint key={sprint.id} sprint={sprint}/>
          ))}
      </div>
    </div>
  )
}
