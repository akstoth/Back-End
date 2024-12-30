import 'dotenv/config'
import postgres from 'postgres'

const {PGHOST, PGUSER, PGPASSWORD, PGDATABASE, ENDPOINT_ID} = process.env;
const URL = `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}`

export const sql = postgres(URL, {ssl: 'require'});