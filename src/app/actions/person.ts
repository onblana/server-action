"use server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

// 이 코드는 서버 액션 코드라고 Next에게 알리는 것

export async function addPerson(formData: FormData) {
  try {
    const name = (formData.get("personName") as string) || "";
    if (name === "") {
      throw new Error("name is empty");
    }
    await sql`INSERT INTO Person (name) VALUES (${name})`;
    revalidatePath("/");
  } catch (error) {
    return { error, status: 500 };
  }
}

export async function deletePerson(name: string) {
  try {
    await sql`DELETE FROM Person WHERE NAME = ${name}`;
    console.log("##############" + "DELETE SUCCESS" + "#############");
    revalidatePath("/");
  } catch (error) {
    return { error, status: 500 };
  }
}
