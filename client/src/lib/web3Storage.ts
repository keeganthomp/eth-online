/* eslint-disable no-restricted-syntax */
import { Web3Storage, CIDString } from 'web3.storage';
import { Message } from 'types';

const API_TOK =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGI2MzMyNTc2ZmRhOWE2NkM5MUREMDYwNTcwMEZGNDI0YWE0NzU4YTkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjI4NDkyMzk0MTAsIm5hbWUiOiJldGgtb25saW5lIn0.bWpseqLrJmElwEy-whPS2ukHTRGOdopFVnywdXIiHBE';

const storage = new Web3Storage({ token: API_TOK });

const FILE_NAME = 'metadata.json';

const uploadMessage = async (message: Omit<Message, 'createdAt' | 'id'>) => {
  const blob = new Blob([JSON.stringify(message)], { type: 'application/json' });
  const fmtContent = [new File([blob], FILE_NAME)];
  const rootCid = await storage.put(fmtContent, {
    maxRetries: 3,
    // onRootCidReady will be called as soon as we've calculated the Content ID locally, before uploading
    onRootCidReady: (localCid) => {
      console.log(`> 🔑 locally calculated Content ID: ${localCid} `);
      console.log('> 📡 sending files to web3.storage ');
    },

    // onStoredChunk is called after each chunk of data is uploaded
    onStoredChunk: (bytes) =>
      console.log(`> 🛰 sent ${bytes.toLocaleString()} bytes to web3.storage`)
  });
  return rootCid;
};

export function makeGatewayURL(cid: CIDString): string {
  return `https://${cid}.ipfs.dweb.link/${FILE_NAME}`;
}

export async function getMessageMetadata(cid: CIDString) {
  const url = makeGatewayURL(cid);
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Unable to get metadata for ${cid}`);
  }
  const metadata = await res.json();
  const gatewayURL = makeGatewayURL(cid);
  const uri = `ipfs://${cid}/${metadata.path}`;
  return { ...metadata, cid, gatewayURL, uri };
}

async function listContent(): Promise<any> {
  const contents = await storage.list();
  return contents;
}

const web3Storage = {
  uploadMessage,
  listContent
};

export default web3Storage;
