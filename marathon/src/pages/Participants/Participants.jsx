import { useParams } from "react-router-dom";
import { useGetSingleEventQuery } from "../../redux/api";
import { SkeletonBike } from "../../components/SkeletonBike/SkeletonBike";
import SmileIcon from "../../assets/svg/smile.svg?react";
import styles from "./Participants.module.scss";


export const Participants = () => {
  const { id } = useParams();
  const { data, isSuccess, isLoading} = useGetSingleEventQuery(id, {
    selectFromResult: (result) => ({
      isSuccess: result?.isSuccess,
      isLoading: result?.isLoading,
      data: {
        participants: result?.data?.participants,
        name: result?.data?.name
      }
    })
  });
  const {name, participants} = {...data};


  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        {isLoading && <SkeletonBike/>}
        {isSuccess && 
          <>
            <h2 className={styles.title}>{name}</h2>
            {participants.length === 0 && 
              <div className={styles.noParticipants}>
                <h3 className={styles.subtitle}>Môžete byť prvým účastníkom</h3>
                <SmileIcon className={styles.smile}/>
              </div>
            }
            {participants.length > 0 && 
              <>
                <h3 className={styles.subtitle}>Registrovaní účastníci:</h3>
                <ul className={styles.list}>
                  {participants.map(({ _id, firstName, lastName, distance }, index) => (
                    <li className={styles.itemList} key={_id}>{`${index + 1 + "."} ${firstName} ${lastName}, distance: ${distance}`}</li>
                  ))}
                </ul>
              </>
            }
          </>
        }
      </div>
    </section>
  );
};
