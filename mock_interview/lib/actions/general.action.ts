import {db} from "@/firebase/admin";

export async function getInterviewByUserId(userId: string) : Promise<Interview[] | null> {
  try {
    const interviews = await db.collection("interviews").where("userId", "==", userId).orderBy("createdAt", "desc").get();
    return interviews.docs.map((doc) =>({
      id: doc.id,
      ...doc.data()
    })) as Interview[]
  } catch (error) {
    console.error("Error getting interviews:", error);
    return null;
  }
}
export async function getLatestInterviews(params: GetLatestInterviewsParams) : Promise<Interview[] | null> {
 const {userId, limit=20} = params;
    const interviews = await db.collection("interviews").where("finalized", "==", true).where("userId", "!=", userId).limit(limit).get();
    return interviews.docs.map((doc) =>({
      id: doc.id,
      ...doc.data()
    })) as Interview[]

}

export async function getInterviewById(id: string) : Promise<Interview | null> {
  try {
    const interview = await db.collection("interviews").doc(id).get();
    return interview.data() as Interview | null
  } catch (error) {
    console.error("Error getting interviews:", error);
    return null;
  }
}