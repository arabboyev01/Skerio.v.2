// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {ApiCalling} from "./makeRequest";

type Data = {
  data: any,
}

const getApiHandle = async function(){
  const res = await fetch(ApiCalling);
  const data = await res.json();
}

export default function handlerData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: getApiHandle })
}
