// Automatically generated with Reach 0.1.11 (98ccf409)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (98ccf409)';
export const _backendVersion = 24;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      3: [ctc0, ctc1, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  
  
  const v206 = stdlib.protect(ctc0, interact.inviteToken, 'for Creator\'s interact field inviteToken');
  const v207 = stdlib.protect(ctc0, interact.likeToken, 'for Creator\'s interact field likeToken');
  
  const v210 = stdlib.tokenEq(v206, v207);
  const v211 = v210 ? false : true;
  stdlib.assert(v211, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./post.rsh:20:10:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./post.rsh:17:9:application call to [unknown function] (defined at: ./post.rsh:17:13:function exp)'],
    msg: null,
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v206, v207],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./post.rsh:23:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./post.rsh:23:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v214, v215], secs: v217, time: v216, didSend: v49, from: v213 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v214
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v215
        });
      ;
      
      const v231 = stdlib.checkedBigNumberify('./post.rsh:27:43:decimal', stdlib.UInt_max, '0');
      const v232 = v216;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v215
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v214
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v214, v215], secs: v217, time: v216, didSend: v49, from: v213 } = txn1;
  const v226 = stdlib.tokenEq(v215, v214);
  const v227 = v226 ? false : true;
  stdlib.assert(v227, {
    at: './post.rsh:23:5:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
    });
  ;
  ;
  ;
  stdlib.protect(ctc1, await interact.ready(), {
    at: './post.rsh:25:19:application',
    fs: ['at ./post.rsh:25:19:application call to [unknown function] (defined at: ./post.rsh:25:19:function exp)', 'at ./post.rsh:25:19:application call to "liftedInteract" (defined at: ./post.rsh:25:19:application)'],
    msg: 'ready',
    who: 'Creator'
    });
  
  let v231 = stdlib.checkedBigNumberify('./post.rsh:27:43:decimal', stdlib.UInt_max, '0');
  let v232 = v216;
  
  let txn2 = txn1;
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v263], secs: v265, time: v264, didSend: v137, from: v262 } = txn3;
    undefined /* setApiDetails */;
    const v267 = v263[stdlib.checkedBigNumberify('./post.rsh:30:10:spread', stdlib.UInt_max, '0')];
    ;
    ;
    ;
    ;
    ;
    const v315 = null;
    await txn3.getOutput('like', 'v315', ctc1, v315);
    const v322 = stdlib.safeAdd(v231, v267);
    const cv231 = v322;
    const cv232 = v264;
    
    v231 = cv231;
    v232 = cv232;
    
    txn2 = txn3;
    continue;
    
    }
  return;
  
  
  };
export async function _like3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _like3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _like3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Null;
  
  
  const [v213, v214, v215, v231] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc0, ctc1, ctc1, ctc2]);
  const v240 = stdlib.protect(ctc3, await interact.in(), {
    at: './post.rsh:1:23:application',
    fs: ['at ./post.rsh:30:25:application call to [unknown function] (defined at: ./post.rsh:30:25:function exp)', 'at ./post.rsh:30:25:application call to [unknown function] (defined at: ./post.rsh:30:25:function exp)'],
    msg: 'in',
    who: 'like'
    });
  const v241 = v240[stdlib.checkedBigNumberify('./post.rsh:1:23:application', stdlib.UInt_max, '0')];
  
  const txn1 = await (ctc.sendrecv({
    args: [v213, v214, v215, v231, v240],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./post.rsh:27:41:dot', stdlib.UInt_max, '0'), [[v241, v215], [stdlib.checkedBigNumberify('./post.rsh:34:12:decimal', stdlib.UInt_max, '1'), v214]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v263], secs: v265, time: v264, didSend: v137, from: v262 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "like"
        });
      const v267 = v263[stdlib.checkedBigNumberify('./post.rsh:30:10:spread', stdlib.UInt_max, '0')];
      ;
      sim_r.txns.push({
        amt: v267,
        kind: 'to',
        tok: v215
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./post.rsh:34:12:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v214
        });
      sim_r.txns.push({
        kind: 'from',
        to: v262,
        tok: v214
        });
      sim_r.txns.push({
        kind: 'from',
        to: v213,
        tok: v215
        });
      const v315 = null;
      const v316 = await txn1.getOutput('like', 'v315', ctc4, v315);
      
      const v322 = stdlib.safeAdd(v231, v267);
      const v382 = v322;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc1, ctc2, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v263], secs: v265, time: v264, didSend: v137, from: v262 } = txn1;
  undefined /* setApiDetails */;
  const v267 = v263[stdlib.checkedBigNumberify('./post.rsh:30:10:spread', stdlib.UInt_max, '0')];
  ;
  ;
  ;
  ;
  ;
  const v315 = null;
  const v316 = await txn1.getOutput('like', 'v315', ctc4, v315);
  if (v137) {
    stdlib.protect(ctc4, await interact.out(v263, v316), {
      at: './post.rsh:30:11:application',
      fs: ['at ./post.rsh:30:11:application call to [unknown function] (defined at: ./post.rsh:30:11:function exp)', 'at ./post.rsh:39:12:application call to "k" (defined at: ./post.rsh:36:11:function exp)', 'at ./post.rsh:36:11:application call to [unknown function] (defined at: ./post.rsh:36:11:function exp)'],
      msg: 'out',
      who: 'like'
      });
    }
  else {
    }
  
  const v322 = stdlib.safeAdd(v231, v267);
  const v382 = v322;
  return;
  
  
  
  };
export async function like(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for like expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for like expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 3) {return _like3(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
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
                "name": "v214",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v215",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "name": "v214",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v215",
                "type": "address"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v263",
                "type": "tuple"
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
    "name": "_reach_oe_v315",
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
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "elem0",
                    "type": "uint256"
                  }
                ],
                "internalType": "struct T6",
                "name": "v263",
                "type": "tuple"
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
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000f2038038062000f20833981016040819052620000269162000342565b60008055436003556040805133815282516020808301919091528084015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a16020808201518051910151620000c0916001600160a01b03918216911614620000b5576001620000b8565b60005b600762000126565b620000ce3415600862000126565b620000d8620001fc565b8051339052602080830180515183516001600160a01b039182169084015290518201518351911660409091015280820180516000905251439101526200011e8162000150565b5050620003f4565b816200014c5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b518b0151821685528b8701515183526003909755436001558951958601969096529251851697840197909752519092169481019490945251908301529060a00160405160208183030381529060405260029080519060200190620001f792919062000248565b505050565b6040805160a0810182526000918101828152606082018390526080820192909252908190815260200162000243604051806040016040528060008152602001600081525090565b905290565b8280546200025690620003b7565b90600052602060002090601f0160209004810192826200027a5760008555620002c5565b82601f106200029557805160ff1916838001178555620002c5565b82800160010185558215620002c5579182015b82811115620002c5578251825591602001919060010190620002a8565b50620002d3929150620002d7565b5090565b5b80821115620002d35760008155600101620002d8565b604080519081016001600160401b03811182821017156200031f57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b03811681146200033d57600080fd5b919050565b600081830360608112156200035657600080fd5b62000360620002ee565b835181526040601f19830112156200037757600080fd5b62000381620002ee565b9150620003916020850162000325565b8252620003a16040850162000325565b6020830152816020820152809250505092915050565b600181811c90821680620003cc57607f821691505b60208210811415620003ee57634e487b7160e01b600052602260045260246000fd5b50919050565b610b1c80620004046000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f114610054578063763740c414610078578063832307571461008b578063ab53f2c6146100a0578063e82935da146100c357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b610052610086366004610859565b6100e6565b34801561009757600080fd5b50600154610065565b3480156100ac57600080fd5b506100b5610111565b60405161006f92919061089d565b6100d66100d13660046108d7565b6101ae565b604051901515815260200161006f565b60408051602081019091526000815261010d61010736849003840184610927565b826101e1565b5050565b600060606000546002808054610126906109aa565b80601f0160208091040260200160405190810160405280929190818152602001828054610152906109aa565b801561019f5780601f106101745761010080835404028352916020019161019f565b820191906000526020600020905b81548152906001019060200180831161018257829003601f168201915b50505050509050915091509091565b60006101b8610748565b60208082015151849052604080519182019052600081526101d982826101e1565b519392505050565b6101f1600360005414600c610413565b815161020c90158061020557508251600154145b600d610413565b60008080556002805461021e906109aa565b80601f016020809104026020016040519081016040528092919081815260200182805461024a906109aa565b80156102975780601f1061026c57610100808354040283529160200191610297565b820191906000526020600020905b81548152906001019060200180831161027a57829003601f168201915b50505050508060200190518101906102af91906109fb565b60408051338152855160208083019190915286015151518183015290519192507face91d8311c1d42194ceea7a64ba4f6f1d530122abc027407da2595ed96d68e1919081900360600190a161030634156009610413565b61032b61032433836040015186602001516000015160000151610439565b600a610413565b61034561033e3383602001516001610439565b600b610413565b6103558160200151336001610451565b604081015181516020850151515161036e929190610451565b604051600081527fafb937f1501620e04a9dbb25c26f3f8c1e5cc63a201f73e42a3ceb19e16b5ac59060200160405180910390a1600082526103ae61077a565b815181516001600160a01b0391821690526020808401518351908316908201526040808501518451931692019190915260608301519085015151516103f3919061046a565b602080830180519290925290514391015261040d816104bd565b50505050565b8161010d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061044783853085610562565b90505b9392505050565b61045c83838361063c565b61046557600080fd5b505050565b6000826104778382610a82565b91508110156104b75760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401610430565b92915050565b60408051608080820183526000808352602080840182815284860183815260608087018581528951516001600160a01b03908116808a528b51870151821686528b518b0151821685528b8701515183526003909755436001558951958601969096529251851697840197909752519092169481019490945251908301529060a001604051602081830303815290604052600290805190602001906104659291906107c0565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b1790529151600092839283929189169183916105c991610aa8565b60006040518083038185875af1925050503d8060008114610606576040519150601f19603f3d011682016040523d82523d6000602084013e61060b565b606091505b509150915061061c8282600161070d565b50808060200190518101906106319190610ac4565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161069b91610aa8565b60006040518083038185875af1925050503d80600081146106d8576040519150601f19603f3d011682016040523d82523d6000602084013e6106dd565b606091505b50915091506106ee8282600261070d565b50808060200190518101906107039190610ac4565b9695505050505050565b6060831561071c57508161044a565b82511561072c5782518084602001fd5b60405163100960cb60e01b815260048101839052602401610430565b60405180604001604052806000815260200161077560408051808201909152600060208201908152815290565b905290565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610775604051806040016040528060008152602001600081525090565b8280546107cc906109aa565b90600052602060002090601f0160209004810192826107ee5760008555610834565b82601f1061080757805160ff1916838001178555610834565b82800160010185558215610834579182015b82811115610834578251825591602001919060010190610819565b50610840929150610844565b5090565b5b808211156108405760008155600101610845565b60006040828403121561086b57600080fd5b50919050565b60005b8381101561088c578181015183820152602001610874565b8381111561040d5750506000910152565b82815260406020820152600082518060408401526108c2816060850160208701610871565b601f01601f1916919091016060019392505050565b6000602082840312156108e957600080fd5b5035919050565b6040516020810167ffffffffffffffff8111828210171561092157634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303604081121561093a57600080fd5b6040516040810181811067ffffffffffffffff8211171561096b57634e487b7160e01b600052604160045260246000fd5b604052833581526020601f198301121561098457600080fd5b61098c6108f0565b91506109966108f0565b602094850135815282529283015250919050565b600181811c908216806109be57607f821691505b6020821081141561086b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146109f657600080fd5b919050565b600060808284031215610a0d57600080fd5b6040516080810181811067ffffffffffffffff82111715610a3e57634e487b7160e01b600052604160045260246000fd5b604052610a4a836109df565b8152610a58602084016109df565b6020820152610a69604084016109df565b6040820152606083015160608201528091505092915050565b60008219821115610aa357634e487b7160e01b600052601160045260246000fd5b500190565b60008251610aba818460208701610871565b9190910192915050565b600060208284031215610ad657600080fd5b8151801515811461044a57600080fdfea2646970667358221220f7ea995f1acab616e792998cc108b8ed9ea295b781075f1f6cf39d4fbe98c3d864736f6c634300080c0033`,
  BytecodeLen: 3872,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  2: {
    at: './post.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './post.rsh:27:41:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ETH: _ETH
  };
export const _Participants = {
  "Creator": Creator,
  "like": like
  };
export const _APIs = {
  like: like
  };
