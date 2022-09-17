// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {};
}
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;

  const _likesReceived = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v202, v203, v204, v220] = svs;
      return await (async () => {
        return v220;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  return {
    infos: {
      likesReceived: {
        decode: _likesReceived,
        dom: [],
        rng: ctc2
      }
    },
    views: {
      3: [ctc0, ctc1, ctc1, ctc2]
    }
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
  };
}
export async function Creator(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for Creator expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for Creator expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Tuple([]);

  const v195 = stdlib.protect(
    ctc0,
    interact.inviteToken,
    "for Creator's interact field inviteToken"
  );
  const v196 = stdlib.protect(ctc0, interact.likeToken, "for Creator's interact field likeToken");

  const v199 = stdlib.tokenEq(v195, v196);
  const v200 = v199 ? false : true;
  stdlib.assert(v200, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./post.rsh:26:10:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./post.rsh:23:9:application call to [unknown function] (defined at: ./post.rsh:23:13:function exp)'
    ],
    msg: null,
    who: 'Creator'
  });

  const txn1 = await ctc.sendrecv({
    args: [v195, v196],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./post.rsh:29:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./post.rsh:29:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v203, v204],
        secs: v206,
        time: v205,
        didSend: v49,
        from: v202
      } = txn1;

      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v203
      });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v204
      });
      const v220 = stdlib.checkedBigNumberify('./post.rsh:33:43:decimal', stdlib.UInt_max, '0');
      const v221 = v205;

      if (
        await (async () => {
          return true;
        })()
      ) {
        sim_r.isHalt = false;
      } else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v204
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: v203
        });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
        });
        sim_r.isHalt = true;
      }
      return sim_r;
    },
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
  });
  const {
    data: [v203, v204],
    secs: v206,
    time: v205,
    didSend: v49,
    from: v202
  } = txn1;
  const v215 = stdlib.tokenEq(v204, v203);
  const v216 = v215 ? false : true;
  stdlib.assert(v216, {
    at: './post.rsh:29:5:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
  });
  stdlib.protect(ctc1, await interact.ready(), {
    at: './post.rsh:31:19:application',
    fs: [
      'at ./post.rsh:31:19:application call to [unknown function] (defined at: ./post.rsh:31:19:function exp)',
      'at ./post.rsh:31:19:application call to "liftedInteract" (defined at: ./post.rsh:31:19:application)'
    ],
    msg: 'ready',
    who: 'Creator'
  });

  let v220 = stdlib.checkedBigNumberify('./post.rsh:33:43:decimal', stdlib.UInt_max, '0');
  let v221 = v205;

  let txn2 = txn1;
  while (
    await (async () => {
      return true;
    })()
  ) {
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc2],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
    });
    const {
      data: [v248],
      secs: v250,
      time: v249,
      didSend: v129,
      from: v247
    } = txn3;
    undefined /* setApiDetails */;
    const v297 = null;
    await txn3.getOutput('like', 'v297', ctc1, v297);
    const v303 = stdlib.safeAdd(
      v220,
      stdlib.checkedBigNumberify('./post.rsh:4:26:decimal', stdlib.UInt_max, '1')
    );
    const cv220 = v303;
    const cv221 = v249;

    v220 = cv220;
    v221 = cv221;

    txn2 = txn3;
    continue;
  }
  return;
}
export async function _like3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _like3 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _like3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Null;

  const [v202, v203, v204, v220] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc0, ctc1, ctc1, ctc2]
  );
  const v229 = stdlib.protect(ctc3, await interact.in(), {
    at: './post.rsh:1:23:application',
    fs: [
      'at ./post.rsh:39:24:application call to [unknown function] (defined at: ./post.rsh:39:24:function exp)',
      'at ./post.rsh:39:24:application call to [unknown function] (defined at: ./post.rsh:39:24:function exp)'
    ],
    msg: 'in',
    who: 'like'
  });

  const txn1 = await ctc.sendrecv({
    args: [v202, v203, v204, v220, v229],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [
      stdlib.checkedBigNumberify('./post.rsh:33:41:dot', stdlib.UInt_max, '0'),
      [
        [stdlib.checkedBigNumberify('./post.rsh:4:26:decimal', stdlib.UInt_max, '1'), v204],
        [stdlib.checkedBigNumberify('./post.rsh:5:35:decimal', stdlib.UInt_max, '1'), v203]
      ]
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      const {
        data: [v248],
        secs: v250,
        time: v249,
        didSend: v129,
        from: v247
      } = txn1;

      sim_r.txns.push({
        kind: 'api',
        who: 'like'
      });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./post.rsh:4:26:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v204
      });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./post.rsh:5:35:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v203
      });
      sim_r.txns.push({
        kind: 'from',
        to: v247,
        tok: v203
      });
      sim_r.txns.push({
        kind: 'from',
        to: v202,
        tok: v204
      });
      const v297 = null;
      const v298 = await txn1.getOutput('like', 'v297', ctc4, v297);

      const v303 = stdlib.safeAdd(
        v220,
        stdlib.checkedBigNumberify('./post.rsh:4:26:decimal', stdlib.UInt_max, '1')
      );
      const v371 = v303;
      sim_r.isHalt = false;

      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc3],
    waitIfNotPresent: false
  });
  const {
    data: [v248],
    secs: v250,
    time: v249,
    didSend: v129,
    from: v247
  } = txn1;
  undefined /* setApiDetails */;
  const v297 = null;
  const v298 = await txn1.getOutput('like', 'v297', ctc4, v297);
  if (v129) {
    stdlib.protect(ctc4, await interact.out(v248, v298), {
      at: './post.rsh:39:11:application',
      fs: [
        'at ./post.rsh:39:11:application call to [unknown function] (defined at: ./post.rsh:39:11:function exp)',
        'at ./post.rsh:48:12:application call to "k" (defined at: ./post.rsh:45:11:function exp)',
        'at ./post.rsh:45:11:application call to [unknown function] (defined at: ./post.rsh:45:11:function exp)'
      ],
      msg: 'out',
      who: 'like'
    });
  } else {
  }

  const v303 = stdlib.safeAdd(
    v220,
    stdlib.checkedBigNumberify('./post.rsh:4:26:decimal', stdlib.UInt_max, '1')
  );
  const v371 = v303;
  return;
}
export async function like(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for like expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for like expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _like3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v203",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v204",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v203",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v204",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v248",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v297",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v248",
                "type": "bool"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "like",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "likesReceived",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000fd638038062000fd6833981016040819052620000269162000342565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a16020808201518051910151620000c0916001600160a01b03918216911614620000b5576001620000b8565b60005b600862000126565b620000ce3415600962000126565b620000d8620001fc565b8051339052602080830180515183516001600160a01b039182169084015290518201518351911660409091015280820180516000905251439101526200011e8162000150565b5050620003f4565b816200014c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b518b0151821685528b8701515183526003909755436001558951958601969096529251851697840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190620001f792919062000248565b505050565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200162000243604051806040016040528060008152602001600081525090565b905290565b8280546200025690620003b7565b90600052602060002090601f0160209004810192826200027a5760008555620002c5565b82601f106200029557805160ff1916838001178555620002c5565b82800160010185558215620002c5579182015b82811115620002c5578251825591602001919060010190620002a8565b50620002d3929150620002d7565b5090565b5b80821115620002d35760008155600101620002d8565b604080519081016001600160401b03811182821017156200031f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200033d57600080fd5b919050565b600081830360608112156200035657600080fd5b62000360620002ee565b835181526040601f19830112156200037757600080fd5b62000381620002ee565b9150620003916020850162000325565b8252620003a16040850162000325565b6020830152816020820152809250505092915050565b600181811c90821680620003cc57607f821691505b60208210811415620003ee57634e487b7160e01b600052602260045260246000fd5b50919050565b610bd280620004046000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780633e59bac4146100835780638323075714610096578063a523b88a146100ab578063ab53f2c6146100c3578063ff9a234b146100e657005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d61009136600461092d565b6100fb565b3480156100a257600080fd5b50600154610070565b6100b3610126565b604051901515815260200161007a565b3480156100cf57600080fd5b506100d8610158565b60405161007a929190610971565b3480156100f257600080fd5b506100706101f5565b60408051602081019091526000815261012261011c368490038401846109bc565b82610207565b5050565b600061013061081f565b60208082015160009081905260408051928301905281526101518282610207565b5192915050565b60006060600054600280805461016d90610a6a565b80601f016020809104026020016040519081016040528092919081815260200182805461019990610a6a565b80156101e65780601f106101bb576101008083540402835291602001916101e6565b820191906000526020600020905b8154815290600101906020018083116101c957829003601f168201915b50505050509050915091509091565b60008061020181610421565b91505090565b610217600360005414600d6104ea565b815161023290158061022b57508251600154145b600e6104ea565b60008080556002805461024490610a6a565b80601f016020809104026020016040519081016040528092919081815260200182805461027090610a6a565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b50505050508060200190518101906102d59190610ab6565b6040805133815285516020808301919091528601515115158183015290519192507fea301fa16f4bb7851ebe70b97d841398dfcfaffcc5b90514d4df21d88b62c5bd919081900360600190a161032d3415600a6104ea565b6103476103403383604001516001610510565b600b6104ea565b61036161035a3383602001516001610510565b600c6104ea565b6103718160200151336001610528565b610385816040015182600001516001610528565b604051600081527fd6db90eb663adf2d42dff1cf0cf20353e3a30e02fe68acec7b55385d17cf27f79060200160405180910390a1600082526103c561084e565b815181516001600160a01b0391821690526020808401518351908316910152604080840151835192169101526060820151610401906001610541565b602080830180519290925290514391015261041b81610594565b50505050565b6000600360005414156104d95760006002805461043d90610a6a565b80601f016020809104026020016040519081016040528092919081815260200182805461046990610a6a565b80156104b65780601f1061048b576101008083540402835291602001916104b6565b820191906000526020600020905b81548152906001019060200180831161049957829003601f168201915b50505050508060200190518101906104ce9190610ab6565b606001519392505050565b6104e5600060076104ea565b919050565b816101225760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061051e83853085610639565b90505b9392505050565b610533838383610713565b61053c57600080fd5b505050565b60008261054e8382610b3d565b915081101561058e5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610507565b92915050565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b518b0151821685528b8701515183526003909755436001558951958601969096529251851697840197909752519092169481019490945251908301529060a0016040516020818303038152906040526002908051906020019061053c929190610894565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916106a091610b63565b60006040518083038185875af1925050503d80600081146106dd576040519150601f19603f3d011682016040523d82523d6000602084013e6106e2565b606091505b50915091506106f3828260016107e4565b50808060200190518101906107089190610b7f565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161077291610b63565b60006040518083038185875af1925050503d80600081146107af576040519150601f19603f3d011682016040523d82523d6000602084013e6107b4565b606091505b50915091506107c5828260026107e4565b50808060200190518101906107da9190610b7f565b9695505050505050565b606083156107f3575081610521565b8251156108035782518084602001fd5b60405163100960cb60e01b815260048101839052602401610507565b60405180604001604052806000815260200161084960405180602001604052806000151581525090565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610849604051806040016040528060008152602001600081525090565b8280546108a090610a6a565b90600052602060002090601f0160209004810192826108c25760008555610908565b82601f106108db57805160ff1916838001178555610908565b82800160010185558215610908579182015b828111156109085782518255916020019190600101906108ed565b50610914929150610918565b5090565b5b808211156109145760008155600101610919565b60006040828403121561093f57600080fd5b50919050565b60005b83811015610960578181015183820152602001610948565b8381111561041b5750506000910152565b8281526040602082015260008251806040840152610996816060850160208701610945565b601f01601f1916919091016060019392505050565b80151581146109b957600080fd5b50565b60008183036040808212156109d057600080fd5b805181810167ffffffffffffffff8282108183111715610a0057634e487b7160e01b600052604160045260246000fd5b818452863583526020601f1986011215610a1957600080fd5b835194506020850191508482108183111715610a4557634e487b7160e01b600052604160045260246000fd5b50909152602084013590610a58826109ab565b90825260208101919091529392505050565b600181811c90821680610a7e57607f821691505b6020821081141561093f57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146104e557600080fd5b600060808284031215610ac857600080fd5b6040516080810181811067ffffffffffffffff82111715610af957634e487b7160e01b600052604160045260246000fd5b604052610b0583610a9f565b8152610b1360208401610a9f565b6020820152610b2460408401610a9f565b6040820152606083015160608201528091505092915050565b60008219821115610b5e57634e487b7160e01b600052601160045260246000fd5b500190565b60008251610b75818460208701610945565b9190910192915050565b600060208284031215610b9157600080fd5b8151610521816109ab56fea264697066735822122071642d086248dc8b9e77bae420d996d922a05adfd49131f751179bdf9623bafc64736f6c634300080c0033`,
  BytecodeLen: 4054,
  Which: `oD`,
  version: 8,
  views: {
    likesReceived: `likesReceived`
  }
};
export const _stateSourceMap = {
  2: {
    at: './post.rsh:54:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
  },
  3: {
    at: './post.rsh:33:41:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
  }
};
export const _Connectors = {
  ETH: _ETH
};
export const _Participants = {
  Creator: Creator,
  like: like
};
export const _APIs = {
  like: like
};
