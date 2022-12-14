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
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc1, ctc2]);
  const ctc4 = stdlib.T_Array(ctc3, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Data({
    None: ctc6,
    Some: ctc6
  });
  const map0_ctc = ctc7;

  const _areFreeInvitesAvailable = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = svs;
      return await (async () => {
        return v1834;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  const _inviteToken = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = svs;
      return await (async () => {
        return v1764;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  const _inviteToksDistrbuted = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = svs;
      return await (async () => {
        return v1817;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  const _isUser = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = svs;
      return await (async (_v1812) => {
        const v1812 = stdlib.protect(ctc5, _v1812, null);

        const v1813 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v1812), null);
        const v1814 = {
          None: 0,
          Some: 1
        }[v1813[0]];
        const v1815 = stdlib.eq(
          v1814,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1'
          )
        );

        return v1815;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  const _likeToken = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = svs;
      return await (async () => {
        return v1789;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  const _likeToksDistributed = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = svs;
      return await (async () => {
        return v1819;
      })(...args);
    }

    stdlib.assert(false, 'illegal view');
  };
  return {
    infos: {
      areFreeInvitesAvailable: {
        decode: _areFreeInvitesAvailable,
        dom: [],
        rng: ctc2
      },
      inviteToken: {
        decode: _inviteToken,
        dom: [],
        rng: ctc0
      },
      inviteToksDistrbuted: {
        decode: _inviteToksDistrbuted,
        dom: [],
        rng: ctc1
      },
      isUser: {
        decode: _isUser,
        dom: [ctc5],
        rng: ctc2
      },
      likeToken: {
        decode: _likeToken,
        dom: [],
        rng: ctc0
      },
      likeToksDistributed: {
        decode: _likeToksDistributed,
        dom: [],
        rng: ctc1
      }
    },
    views: {
      3: [ctc0, ctc0, ctc1, ctc1, ctc1, ctc1, ctc4, ctc2]
    }
  };
}
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
  });
  const ctc2 = stdlib.T_Tuple([ctc1]);
  return {
    mapDataTy: ctc2
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
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
  });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Data({
    buyInviteTok0_94: ctc3,
    buyLikeTok0_94: ctc3,
    getInitialInvite0_94: ctc3
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
  });

  const v1751 = [
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    false
  ];
  const v1752 = [v1751, v1751];
  const txn1 = await ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./auth.rsh:33:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./auth.rsh:33:5:decimal', stdlib.UInt_max, '0'), []],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [],
        secs: v1758,
        time: v1757,
        didSend: v22,
        from: v1756
      } = txn1;

      const v1759 = 'Invite Token                    ';
      const v1760 = 'INV     ';
      const v1761 = '                                                                                                ';
      const v1762 = '                                ';
      const v1763 = stdlib.simTokenNew(
        sim_r,
        v1759,
        v1760,
        v1761,
        v1762,
        stdlib.UInt_max,
        stdlib.checkedBigNumberify('./auth.rsh:39:15:decimal', stdlib.UInt_max, '0'),
        getSimTokCtr()
      );
      const v1764 = await txn1.getOutput('internal', 'v1763', ctc2, v1763);
      const v1774 =
        v1752[stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0')];
      const v1775 = stdlib.Array_set(v1774, '0', stdlib.UInt_max);
      const v1776 = stdlib.Array_set(
        v1752,
        stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0'),
        v1775
      );
      const v1778 =
        v1776[stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0')];
      const v1779 = stdlib.Array_set(v1778, '1', stdlib.UInt_max);
      const v1780 = stdlib.Array_set(
        v1776,
        stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0'),
        v1779
      );
      const v1781 =
        v1780[stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0')];
      const v1782 = stdlib.Array_set(v1781, '2', false);
      const v1783 = stdlib.Array_set(
        v1780,
        stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0'),
        v1782
      );
      const v1784 = 'Like Token                      ';
      const v1785 = 'LIKE    ';
      const v1788 = stdlib.simTokenNew(
        sim_r,
        v1784,
        v1785,
        v1761,
        v1762,
        stdlib.UInt_max,
        stdlib.checkedBigNumberify('./auth.rsh:46:15:decimal', stdlib.UInt_max, '0'),
        getSimTokCtr()
      );
      const v1789 = await txn1.getOutput('internal', 'v1788', ctc2, v1788);
      const v1799 =
        v1783[stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1')];
      const v1800 = stdlib.Array_set(v1799, '0', stdlib.UInt_max);
      const v1801 = stdlib.Array_set(
        v1783,
        stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1'),
        v1800
      );
      const v1805 =
        v1801[stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1')];
      const v1806 = stdlib.Array_set(v1805, '1', stdlib.UInt_max);
      const v1807 = stdlib.Array_set(
        v1801,
        stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1'),
        v1806
      );
      const v1808 =
        v1807[stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1')];
      const v1809 = stdlib.Array_set(v1808, '2', false);
      const v1810 = stdlib.Array_set(
        v1807,
        stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1'),
        v1809
      );

      const v1816 = stdlib.checkedBigNumberify('./auth.rsh:59:11:decimal', stdlib.UInt_max, '0');
      const v1817 = stdlib.checkedBigNumberify('./auth.rsh:59:5:decimal', stdlib.UInt_max, '0');
      const v1818 = stdlib.checkedBigNumberify('./auth.rsh:59:14:decimal', stdlib.UInt_max, '0');
      const v1819 = stdlib.checkedBigNumberify('./auth.rsh:59:8:decimal', stdlib.UInt_max, '0');
      const v1820 = v1757;
      const v1822 = v1810;

      if (
        await (async () => {
          return true;
        })()
      ) {
        const v1834 = stdlib.lt(
          v1817,
          stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
        );
        sim_r.isHalt = false;
      } else {
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
    tys: [],
    waitIfNotPresent: false
  });
  const {
    data: [],
    secs: v1758,
    time: v1757,
    didSend: v22,
    from: v1756
  } = txn1;
  const v1759 = 'Invite Token                    ';
  const v1760 = 'INV     ';
  const v1761 = '                                                                                                ';
  const v1762 = '                                ';
  const v1763 = undefined; /* TokenNew */
  const v1764 = await txn1.getOutput('internal', 'v1763', ctc2, v1763);
  const v1774 =
    v1752[stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0')];
  const v1775 = stdlib.Array_set(v1774, '0', stdlib.UInt_max);
  const v1776 = stdlib.Array_set(
    v1752,
    stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0'),
    v1775
  );
  const v1778 =
    v1776[stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0')];
  const v1779 = stdlib.Array_set(v1778, '1', stdlib.UInt_max);
  const v1780 = stdlib.Array_set(
    v1776,
    stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0'),
    v1779
  );
  const v1781 =
    v1780[stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0')];
  const v1782 = stdlib.Array_set(v1781, '2', false);
  const v1783 = stdlib.Array_set(
    v1780,
    stdlib.checkedBigNumberify('./auth.rsh:35:32:application', stdlib.UInt_max, '0'),
    v1782
  );
  const v1784 = 'Like Token                      ';
  const v1785 = 'LIKE    ';
  const v1788 = undefined; /* TokenNew */
  const v1789 = await txn1.getOutput('internal', 'v1788', ctc2, v1788);
  const v1790 = [v1764];
  const v2555 =
    v1790[
      stdlib.checkedBigNumberify('reach standard library:151:21:application', stdlib.UInt_max, '0')
    ];
  const v2559 = stdlib.tokenEq(v1789, v2555);
  const v1798 = v2559 ? false : true;
  stdlib.assert(v1798, {
    at: './auth.rsh:42:30:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Creator'
  });
  const v1799 =
    v1783[stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1')];
  const v1800 = stdlib.Array_set(v1799, '0', stdlib.UInt_max);
  const v1801 = stdlib.Array_set(
    v1783,
    stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1'),
    v1800
  );
  const v1803 = stdlib.tokenEq(v1789, v1764);
  const v1804 = v1803 ? false : true;
  stdlib.assert(v1804, {
    at: './auth.rsh:42:30:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Creator'
  });
  const v1805 =
    v1801[stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1')];
  const v1806 = stdlib.Array_set(v1805, '1', stdlib.UInt_max);
  const v1807 = stdlib.Array_set(
    v1801,
    stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1'),
    v1806
  );
  const v1808 =
    v1807[stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1')];
  const v1809 = stdlib.Array_set(v1808, '2', false);
  const v1810 = stdlib.Array_set(
    v1807,
    stdlib.checkedBigNumberify('./auth.rsh:42:30:application', stdlib.UInt_max, '1'),
    v1809
  );
  stdlib.protect(ctc0, await interact.ready(), {
    at: './auth.rsh:49:19:application',
    fs: [
      'at ./auth.rsh:49:19:application call to [unknown function] (defined at: ./auth.rsh:49:19:function exp)',
      'at ./auth.rsh:49:19:application call to "liftedInteract" (defined at: ./auth.rsh:49:19:application)'
    ],
    msg: 'ready',
    who: 'Creator'
  });

  let v1816 = stdlib.checkedBigNumberify('./auth.rsh:59:11:decimal', stdlib.UInt_max, '0');
  let v1817 = stdlib.checkedBigNumberify('./auth.rsh:59:5:decimal', stdlib.UInt_max, '0');
  let v1818 = stdlib.checkedBigNumberify('./auth.rsh:59:14:decimal', stdlib.UInt_max, '0');
  let v1819 = stdlib.checkedBigNumberify('./auth.rsh:59:8:decimal', stdlib.UInt_max, '0');
  let v1820 = v1757;
  let v1822 = v1810;

  let txn2 = txn1;
  while (
    await (async () => {
      return true;
    })()
  ) {
    const v1834 = stdlib.lt(
      v1817,
      stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
    );
    const txn3 = await ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
    });
    const {
      data: [v1964],
      secs: v1966,
      time: v1965,
      didSend: v1379,
      from: v1963
    } = txn3;
    switch (v1964[0]) {
      case 'buyInviteTok0_94': {
        const v1967 = v1964[1];
        undefined /* setApiDetails */;
        const v1973 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1963), null);
        const v1974 = {
          None: 0,
          Some: 1
        }[v1973[0]];
        const v1975 = stdlib.eq(
          v1974,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1'
          )
        );
        const v1976 = v1975 ? false : true;
        stdlib.assert(v1976, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:120:27:application call to "checkUsrAlreadyExist" (defined at: ./auth.rsh:66:40:function exp)',
            'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'already received inital invite. You can purchase more like tokens tho :)',
          who: 'Creator'
        });
        const v1979 =
          v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
        const v1980 =
          v1979[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
        const v1981 = stdlib.ge(
          v1980,
          stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
        );
        stdlib.assert(v1981, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:121:25:application call to "chkCtcInviteTokBal" (defined at: ./auth.rsh:72:37:function exp)',
            'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'not enough invite tokens',
          who: 'Creator'
        });
        const v1983 = stdlib.gt(
          v1817,
          stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
        );
        stdlib.assert(v1983, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'you can still get a FREE invite token!',
          who: 'Creator'
        });
        const v2063 = stdlib.sub(
          v1980,
          stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
        );
        const v2065 = stdlib.Array_set(v1979, '0', v2063);
        const v2066 = stdlib.Array_set(
          v1822,
          stdlib.checkedBigNumberify('./auth.rsh:129:60:application', stdlib.UInt_max, '0'),
          v2065
        );
        await stdlib.mapSet(map0, v1963, null);
        const v2068 = null;
        await txn3.getOutput('buyInviteTok', 'v2068', ctc0, v2068);
        const v2074 = stdlib.safeAdd(
          v1817,
          stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
        );
        const v2075 = stdlib.safeAdd(
          v1816,
          stdlib.checkedBigNumberify('./auth.rsh:135:29:decimal', stdlib.UInt_max, '1')
        );
        const cv1816 = v2075;
        const cv1817 = v2074;
        const cv1818 = v1818;
        const cv1819 = v1819;
        const cv1820 = v1965;
        const cv1822 = v2066;

        v1816 = cv1816;
        v1817 = cv1817;
        v1818 = cv1818;
        v1819 = cv1819;
        v1820 = cv1820;
        v1822 = cv1822;

        txn2 = txn3;
        continue;
        break;
      }
      case 'buyLikeTok0_94': {
        const v2158 = v1964[1];
        undefined /* setApiDetails */;
        const v2184 =
          v1822[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
        const v2185 =
          v2184[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
        const v2186 = stdlib.ge(
          v2185,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        stdlib.assert(v2186, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:142:23:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
            'at ./auth.rsh:141:30:application call to [unknown function] (defined at: ./auth.rsh:141:30:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:141:30:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'not enough like tokens',
          who: 'Creator'
        });
        const v2229 =
          v1822[stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0')];
        const v2230 =
          v2229[stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0')];
        const v2231 = stdlib.add(
          v2230,
          stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')
        );
        const v2233 = stdlib.Array_set(v2229, '0', v2231);
        const v2234 = stdlib.Array_set(
          v1822,
          stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0'),
          v2233
        );
        const v2270 =
          v2234[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
        const v2271 =
          v2270[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
        const v2272 = stdlib.ge(
          v2271,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        stdlib.assert(v2272, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:142:23:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
            'at ./auth.rsh:145:11:application call to [unknown function] (defined at: ./auth.rsh:145:11:function exp)'
          ],
          msg: 'not enough like tokens',
          who: 'Creator'
        });
        const v2274 =
          v2234[stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0')];
        const v2275 =
          v2274[stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0')];
        const v2279 = stdlib.sub(
          v2275,
          stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
        );
        const v2281 = stdlib.Array_set(v2274, '0', v2279);
        const v2282 = stdlib.Array_set(
          v2234,
          stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0'),
          v2281
        );
        const v2283 =
          v2282[stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '1')];
        const v2284 =
          v2283[stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '0')];
        const v2288 = stdlib.sub(
          v2284,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        const v2290 = stdlib.Array_set(v2283, '0', v2288);
        const v2291 = stdlib.Array_set(
          v2282,
          stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '1'),
          v2290
        );
        const v2292 = null;
        await txn3.getOutput('buyLikeTok', 'v2292', ctc0, v2292);
        const v2298 = stdlib.safeAdd(
          v1819,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        const v2299 = stdlib.safeAdd(
          v1818,
          stdlib.checkedBigNumberify('./auth.rsh:153:30:decimal', stdlib.UInt_max, '1')
        );
        const cv1816 = v1816;
        const cv1817 = v1817;
        const cv1818 = v2299;
        const cv1819 = v2298;
        const cv1820 = v1965;
        const cv1822 = v2291;

        v1816 = cv1816;
        v1817 = cv1817;
        v1818 = cv1818;
        v1819 = cv1819;
        v1820 = cv1820;
        v1822 = cv1822;

        txn2 = txn3;
        continue;
        break;
      }
      case 'getInitialInvite0_94': {
        const v2349 = v1964[1];
        undefined /* setApiDetails */;
        stdlib.assert(v1834, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'initial invites gone',
          who: 'Creator'
        });
        const v2389 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1963), null);
        const v2390 = {
          None: 0,
          Some: 1
        }[v2389[0]];
        const v2391 = stdlib.eq(
          v2390,
          stdlib.checkedBigNumberify(
            'reach standard library:38:41:application',
            stdlib.UInt_max,
            '1'
          )
        );
        const v2392 = v2391 ? false : true;
        stdlib.assert(v2392, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:101:27:application call to "checkUsrAlreadyExist" (defined at: ./auth.rsh:66:40:function exp)',
            'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'already received inital invite. You can purchase more like tokens tho :)',
          who: 'Creator'
        });
        const v2396 =
          v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
        const v2397 =
          v2396[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
        const v2398 = stdlib.ge(
          v2397,
          stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
        );
        stdlib.assert(v2398, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:82:27:application call to "chkCtcInviteTokBal" (defined at: ./auth.rsh:72:37:function exp)',
            'at ./auth.rsh:102:19:application call to "chkCtcTokBal" (defined at: ./auth.rsh:81:31:function exp)',
            'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'not enough invite tokens',
          who: 'Creator'
        });
        const v2401 =
          v1822[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
        const v2402 =
          v2401[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
        const v2403 = stdlib.ge(
          v2402,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        stdlib.assert(v2403, {
          at: 'reach standard library:57:5:application',
          fs: [
            'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
            'at ./auth.rsh:83:25:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
            'at ./auth.rsh:102:19:application call to "chkCtcTokBal" (defined at: ./auth.rsh:81:31:function exp)',
            'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
            'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
            'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
          ],
          msg: 'not enough like tokens',
          who: 'Creator'
        });
        await stdlib.mapSet(map0, v1963, null);
        const v2518 = stdlib.sub(
          v2397,
          stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
        );
        const v2520 = stdlib.Array_set(v2396, '0', v2518);
        const v2521 = stdlib.Array_set(
          v1822,
          stdlib.checkedBigNumberify('./auth.rsh:107:60:application', stdlib.UInt_max, '0'),
          v2520
        );
        const v2522 =
          v2521[stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '1')];
        const v2523 =
          v2522[stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '0')];
        const v2527 = stdlib.sub(
          v2523,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        const v2529 = stdlib.Array_set(v2522, '0', v2527);
        const v2530 = stdlib.Array_set(
          v2521,
          stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '1'),
          v2529
        );
        const v2531 = null;
        await txn3.getOutput('getInitialInvite', 'v2531', ctc0, v2531);
        const v2537 = stdlib.safeAdd(
          v1817,
          stdlib.checkedBigNumberify('./auth.rsh:111:23:decimal', stdlib.UInt_max, '1')
        );
        const v2538 = stdlib.safeAdd(
          v1819,
          stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
        );
        const cv1816 = v1816;
        const cv1817 = v2537;
        const cv1818 = v1818;
        const cv1819 = v2538;
        const cv1820 = v1965;
        const cv1822 = v2530;

        v1816 = cv1816;
        v1817 = cv1817;
        v1818 = cv1818;
        v1819 = cv1819;
        v1820 = cv1820;
        v1822 = cv1822;

        txn2 = txn3;
        continue;
        break;
      }
    }
  }
  return;
}
export async function _buyInviteTok3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _buyInviteTok3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _buyInviteTok3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
  });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    buyInviteTok0_94: ctc7,
    buyLikeTok0_94: ctc7,
    getInitialInvite0_94: ctc7
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
  });

  const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc2, ctc2, ctc3, ctc3, ctc3, ctc3, ctc6, ctc4]
  );
  const v1862 = ctc.selfAddress();
  const v1864 = stdlib.protect(ctc7, await interact.in(), {
    at: './auth.rsh:1:23:application',
    fs: [
      'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
      'at ./auth.rsh:58:76:application call to "runbuyInviteTok0_94" (defined at: ./auth.rsh:119:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'in',
    who: 'buyInviteTok'
  });
  const v1866 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1862), null);
  const v1867 = {
    None: 0,
    Some: 1
  }[v1866[0]];
  const v1868 = stdlib.eq(
    v1867,
    stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
  );
  const v1869 = v1868 ? false : true;
  stdlib.assert(v1869, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:120:27:application call to "checkUsrAlreadyExist" (defined at: ./auth.rsh:66:40:function exp)',
      'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
      'at ./auth.rsh:58:76:application call to "runbuyInviteTok0_94" (defined at: ./auth.rsh:119:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'already received inital invite. You can purchase more like tokens tho :)',
    who: 'buyInviteTok'
  });
  const v1872 =
    v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
  const v1873 =
    v1872[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
  const v1874 = stdlib.ge(
    v1873,
    stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
  );
  stdlib.assert(v1874, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:121:25:application call to "chkCtcInviteTokBal" (defined at: ./auth.rsh:72:37:function exp)',
      'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
      'at ./auth.rsh:58:76:application call to "runbuyInviteTok0_94" (defined at: ./auth.rsh:119:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'not enough invite tokens',
    who: 'buyInviteTok'
  });
  const v1876 = stdlib.gt(
    v1817,
    stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
  );
  stdlib.assert(v1876, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
      'at ./auth.rsh:58:76:application call to "runbuyInviteTok0_94" (defined at: ./auth.rsh:119:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'you can still get a FREE invite token!',
    who: 'buyInviteTok'
  });
  const v1881 = ['buyInviteTok0_94', v1864];

  const txn1 = await ctc.sendrecv({
    args: [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834, v1881],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [
      stdlib.checkedBigNumberify('./auth.rsh:9:25:decimal', stdlib.UInt_max, '4'),
      [[stdlib.checkedBigNumberify('./auth.rsh:127:28:decimal', stdlib.UInt_max, '0'), v1764]]
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1964],
        secs: v1966,
        time: v1965,
        didSend: v1379,
        from: v1963
      } = txn1;

      switch (v1964[0]) {
        case 'buyInviteTok0_94': {
          const v1967 = v1964[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'buyInviteTok'
          });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1963), null);
          const v1979 =
            v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
          const v1980 =
            v1979[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'),
            kind: 'to',
            tok: undefined /* Nothing */
          });
          const v2063 = stdlib.sub(
            v1980,
            stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
          );
          const v2065 = stdlib.Array_set(v1979, '0', v2063);
          const v2066 = stdlib.Array_set(
            v1822,
            stdlib.checkedBigNumberify('./auth.rsh:129:60:application', stdlib.UInt_max, '0'),
            v2065
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1963,
            tok: v1764
          });
          await stdlib.simMapSet(sim_r, 0, v1963, null);
          const v2068 = null;
          const v2069 = await txn1.getOutput('buyInviteTok', 'v2068', ctc0, v2068);

          const v2074 = stdlib.safeAdd(
            v1817,
            stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
          );
          const v2075 = stdlib.safeAdd(
            v1816,
            stdlib.checkedBigNumberify('./auth.rsh:135:29:decimal', stdlib.UInt_max, '1')
          );
          const v2975 = v2075;
          const v2976 = v2074;
          const v2977 = v1818;
          const v2978 = v1819;
          const v2980 = v2066;
          const v2981 = stdlib.lt(
            v2074,
            stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
          );
          sim_r.isHalt = false;

          break;
        }
        case 'buyLikeTok0_94': {
          const v2158 = v1964[1];

          break;
        }
        case 'getInitialInvite0_94': {
          const v2349 = v1964[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc3, ctc3, ctc3, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
  });
  const {
    data: [v1964],
    secs: v1966,
    time: v1965,
    didSend: v1379,
    from: v1963
  } = txn1;
  switch (v1964[0]) {
    case 'buyInviteTok0_94': {
      const v1967 = v1964[1];
      undefined /* setApiDetails */;
      const v1973 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1963), null);
      const v1974 = {
        None: 0,
        Some: 1
      }[v1973[0]];
      const v1975 = stdlib.eq(
        v1974,
        stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
      );
      const v1976 = v1975 ? false : true;
      stdlib.assert(v1976, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:120:27:application call to "checkUsrAlreadyExist" (defined at: ./auth.rsh:66:40:function exp)',
          'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'already received inital invite. You can purchase more like tokens tho :)',
        who: 'buyInviteTok'
      });
      const v1979 =
        v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
      const v1980 =
        v1979[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
      const v1981 = stdlib.ge(
        v1980,
        stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
      );
      stdlib.assert(v1981, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:121:25:application call to "chkCtcInviteTokBal" (defined at: ./auth.rsh:72:37:function exp)',
          'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'not enough invite tokens',
        who: 'buyInviteTok'
      });
      const v1983 = stdlib.gt(
        v1817,
        stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
      );
      stdlib.assert(v1983, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:122:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:119:32:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:119:32:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'you can still get a FREE invite token!',
        who: 'buyInviteTok'
      });
      const v2063 = stdlib.sub(
        v1980,
        stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
      );
      const v2065 = stdlib.Array_set(v1979, '0', v2063);
      const v2066 = stdlib.Array_set(
        v1822,
        stdlib.checkedBigNumberify('./auth.rsh:129:60:application', stdlib.UInt_max, '0'),
        v2065
      );
      await stdlib.mapSet(map0, v1963, null);
      const v2068 = null;
      const v2069 = await txn1.getOutput('buyInviteTok', 'v2068', ctc0, v2068);
      if (v1379) {
        stdlib.protect(ctc0, await interact.out(v1967, v2069), {
          at: './auth.rsh:119:11:application',
          fs: [
            'at ./auth.rsh:119:11:application call to [unknown function] (defined at: ./auth.rsh:119:11:function exp)',
            'at ./auth.rsh:131:12:application call to "k" (defined at: ./auth.rsh:128:11:function exp)',
            'at ./auth.rsh:128:11:application call to [unknown function] (defined at: ./auth.rsh:128:11:function exp)'
          ],
          msg: 'out',
          who: 'buyInviteTok'
        });
      } else {
      }

      const v2074 = stdlib.safeAdd(
        v1817,
        stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
      );
      const v2075 = stdlib.safeAdd(
        v1816,
        stdlib.checkedBigNumberify('./auth.rsh:135:29:decimal', stdlib.UInt_max, '1')
      );
      const v2975 = v2075;
      const v2976 = v2074;
      const v2977 = v1818;
      const v2978 = v1819;
      const v2980 = v2066;
      const v2981 = stdlib.lt(
        v2074,
        stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
      );
      return;

      break;
    }
    case 'buyLikeTok0_94': {
      const v2158 = v1964[1];
      return;
      break;
    }
    case 'getInitialInvite0_94': {
      const v2349 = v1964[1];
      return;
      break;
    }
  }
}
export async function _buyLikeTok3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for _buyLikeTok3 expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _buyLikeTok3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
  });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    buyInviteTok0_94: ctc7,
    buyLikeTok0_94: ctc7,
    getInitialInvite0_94: ctc7
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
  });

  const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc2, ctc2, ctc3, ctc3, ctc3, ctc3, ctc6, ctc4]
  );
  const v1885 = stdlib.protect(ctc7, await interact.in(), {
    at: './auth.rsh:1:23:application',
    fs: [
      'at ./auth.rsh:141:30:application call to [unknown function] (defined at: ./auth.rsh:141:30:function exp)',
      'at ./auth.rsh:58:76:application call to "runbuyLikeTok0_94" (defined at: ./auth.rsh:141:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'in',
    who: 'buyLikeTok'
  });
  const v1887 =
    v1822[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
  const v1888 =
    v1887[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
  const v1889 = stdlib.ge(
    v1888,
    stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
  );
  stdlib.assert(v1889, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:142:23:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
      'at ./auth.rsh:141:30:application call to [unknown function] (defined at: ./auth.rsh:141:30:function exp)',
      'at ./auth.rsh:58:76:application call to "runbuyLikeTok0_94" (defined at: ./auth.rsh:141:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'not enough like tokens',
    who: 'buyLikeTok'
  });
  const v1894 = ['buyLikeTok0_94', v1885];

  const txn1 = await ctc.sendrecv({
    args: [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834, v1894],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [
      stdlib.checkedBigNumberify('./auth.rsh:10:26:decimal', stdlib.UInt_max, '1'),
      [[stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1'), v1764]]
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1964],
        secs: v1966,
        time: v1965,
        didSend: v1379,
        from: v1963
      } = txn1;

      switch (v1964[0]) {
        case 'buyInviteTok0_94': {
          const v1967 = v1964[1];

          break;
        }
        case 'buyLikeTok0_94': {
          const v2158 = v1964[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'buyLikeTok'
          });
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: undefined /* Nothing */
          });
          const v2229 =
            v1822[stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0')];
          const v2230 =
            v2229[stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0')];
          const v2231 = stdlib.add(
            v2230,
            stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')
          );
          const v2233 = stdlib.Array_set(v2229, '0', v2231);
          const v2234 = stdlib.Array_set(
            v1822,
            stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0'),
            v2233
          );
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'),
            kind: 'to',
            tok: v1764
          });
          const v2274 =
            v2234[
              stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0')
            ];
          const v2275 =
            v2274[
              stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0')
            ];
          const v2279 = stdlib.sub(
            v2275,
            stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
          );
          const v2281 = stdlib.Array_set(v2274, '0', v2279);
          const v2282 = stdlib.Array_set(
            v2234,
            stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0'),
            v2281
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1963,
            tok: v1764
          });
          const v2283 =
            v2282[
              stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '1')
            ];
          const v2284 =
            v2283[
              stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '0')
            ];
          const v2288 = stdlib.sub(
            v2284,
            stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
          );
          const v2290 = stdlib.Array_set(v2283, '0', v2288);
          const v2291 = stdlib.Array_set(
            v2282,
            stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '1'),
            v2290
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1963,
            tok: v1789
          });
          const v2292 = null;
          const v2293 = await txn1.getOutput('buyLikeTok', 'v2292', ctc0, v2292);

          const v2298 = stdlib.safeAdd(
            v1819,
            stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
          );
          const v2299 = stdlib.safeAdd(
            v1818,
            stdlib.checkedBigNumberify('./auth.rsh:153:30:decimal', stdlib.UInt_max, '1')
          );
          const v3007 = v1816;
          const v3008 = v1817;
          const v3009 = v2299;
          const v3010 = v2298;
          const v3012 = v2291;
          const v3013 = stdlib.lt(
            v1817,
            stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
          );
          sim_r.isHalt = false;

          break;
        }
        case 'getInitialInvite0_94': {
          const v2349 = v1964[1];

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc3, ctc3, ctc3, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
  });
  const {
    data: [v1964],
    secs: v1966,
    time: v1965,
    didSend: v1379,
    from: v1963
  } = txn1;
  switch (v1964[0]) {
    case 'buyInviteTok0_94': {
      const v1967 = v1964[1];
      return;
      break;
    }
    case 'buyLikeTok0_94': {
      const v2158 = v1964[1];
      undefined /* setApiDetails */;
      const v2184 =
        v1822[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
      const v2185 =
        v2184[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
      const v2186 = stdlib.ge(
        v2185,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      stdlib.assert(v2186, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:142:23:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
          'at ./auth.rsh:141:30:application call to [unknown function] (defined at: ./auth.rsh:141:30:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:141:30:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'not enough like tokens',
        who: 'buyLikeTok'
      });
      const v2229 = v1822[stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0')];
      const v2230 = v2229[stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0')];
      const v2231 = stdlib.add(
        v2230,
        stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')
      );
      const v2233 = stdlib.Array_set(v2229, '0', v2231);
      const v2234 = stdlib.Array_set(
        v1822,
        stdlib.checkedBigNumberify('./auth.rsh:58:76:dot', stdlib.UInt_max, '0'),
        v2233
      );
      const v2270 =
        v2234[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
      const v2271 =
        v2270[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
      const v2272 = stdlib.ge(
        v2271,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      stdlib.assert(v2272, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:142:23:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
          'at ./auth.rsh:145:11:application call to [unknown function] (defined at: ./auth.rsh:145:11:function exp)'
        ],
        msg: 'not enough like tokens',
        who: 'buyLikeTok'
      });
      const v2274 =
        v2234[stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0')];
      const v2275 =
        v2274[stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0')];
      const v2279 = stdlib.sub(
        v2275,
        stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
      );
      const v2281 = stdlib.Array_set(v2274, '0', v2279);
      const v2282 = stdlib.Array_set(
        v2234,
        stdlib.checkedBigNumberify('./auth.rsh:146:60:application', stdlib.UInt_max, '0'),
        v2281
      );
      const v2283 =
        v2282[stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '1')];
      const v2284 =
        v2283[stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '0')];
      const v2288 = stdlib.sub(
        v2284,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      const v2290 = stdlib.Array_set(v2283, '0', v2288);
      const v2291 = stdlib.Array_set(
        v2282,
        stdlib.checkedBigNumberify('./auth.rsh:147:50:application', stdlib.UInt_max, '1'),
        v2290
      );
      const v2292 = null;
      const v2293 = await txn1.getOutput('buyLikeTok', 'v2292', ctc0, v2292);
      if (v1379) {
        stdlib.protect(ctc0, await interact.out(v2158, v2293), {
          at: './auth.rsh:141:11:application',
          fs: [
            'at ./auth.rsh:141:11:application call to [unknown function] (defined at: ./auth.rsh:141:11:function exp)',
            'at ./auth.rsh:148:12:application call to "k" (defined at: ./auth.rsh:145:11:function exp)',
            'at ./auth.rsh:145:11:application call to [unknown function] (defined at: ./auth.rsh:145:11:function exp)'
          ],
          msg: 'out',
          who: 'buyLikeTok'
        });
      } else {
      }

      const v2298 = stdlib.safeAdd(
        v1819,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      const v2299 = stdlib.safeAdd(
        v1818,
        stdlib.checkedBigNumberify('./auth.rsh:153:30:decimal', stdlib.UInt_max, '1')
      );
      const v3007 = v1816;
      const v3008 = v1817;
      const v3009 = v2299;
      const v3010 = v2298;
      const v3012 = v2291;
      const v3013 = stdlib.lt(
        v1817,
        stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
      );
      return;

      break;
    }
    case 'getInitialInvite0_94': {
      const v2349 = v1964[1];
      return;
      break;
    }
  }
}
export async function _getInitialInvite3(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for _getInitialInvite3 expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for _getInitialInvite3 expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
  });
  const ctc2 = stdlib.T_Token;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    buyInviteTok0_94: ctc7,
    buyLikeTok0_94: ctc7,
    getInitialInvite0_94: ctc7
  });

  const map0_ctc = ctc1;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
  });

  const [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834] = await ctc.getState(
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'),
    [ctc2, ctc2, ctc3, ctc3, ctc3, ctc3, ctc6, ctc4]
  );
  const v1835 = ctc.selfAddress();
  const v1837 = stdlib.protect(ctc7, await interact.in(), {
    at: './auth.rsh:1:23:application',
    fs: [
      'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
      'at ./auth.rsh:58:76:application call to "rungetInitialInvite0_94" (defined at: ./auth.rsh:99:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'in',
    who: 'getInitialInvite'
  });
  stdlib.assert(v1834, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
      'at ./auth.rsh:58:76:application call to "rungetInitialInvite0_94" (defined at: ./auth.rsh:99:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'initial invites gone',
    who: 'getInitialInvite'
  });
  const v1841 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1835), null);
  const v1842 = {
    None: 0,
    Some: 1
  }[v1841[0]];
  const v1843 = stdlib.eq(
    v1842,
    stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
  );
  const v1844 = v1843 ? false : true;
  stdlib.assert(v1844, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:101:27:application call to "checkUsrAlreadyExist" (defined at: ./auth.rsh:66:40:function exp)',
      'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
      'at ./auth.rsh:58:76:application call to "rungetInitialInvite0_94" (defined at: ./auth.rsh:99:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'already received inital invite. You can purchase more like tokens tho :)',
    who: 'getInitialInvite'
  });
  const v1848 =
    v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
  const v1849 =
    v1848[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
  const v1850 = stdlib.ge(
    v1849,
    stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
  );
  stdlib.assert(v1850, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:82:27:application call to "chkCtcInviteTokBal" (defined at: ./auth.rsh:72:37:function exp)',
      'at ./auth.rsh:102:19:application call to "chkCtcTokBal" (defined at: ./auth.rsh:81:31:function exp)',
      'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
      'at ./auth.rsh:58:76:application call to "rungetInitialInvite0_94" (defined at: ./auth.rsh:99:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'not enough invite tokens',
    who: 'getInitialInvite'
  });
  const v1853 =
    v1822[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
  const v1854 =
    v1853[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
  const v1855 = stdlib.ge(
    v1854,
    stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
  );
  stdlib.assert(v1855, {
    at: 'reach standard library:57:5:application',
    fs: [
      'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
      'at ./auth.rsh:83:25:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
      'at ./auth.rsh:102:19:application call to "chkCtcTokBal" (defined at: ./auth.rsh:81:31:function exp)',
      'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
      'at ./auth.rsh:58:76:application call to "rungetInitialInvite0_94" (defined at: ./auth.rsh:99:10:function exp)',
      'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)'
    ],
    msg: 'not enough like tokens',
    who: 'getInitialInvite'
  });
  const v1860 = ['getInitialInvite0_94', v1837];

  const txn1 = await ctc.sendrecv({
    args: [v1764, v1789, v1816, v1817, v1818, v1819, v1822, v1834, v1860],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [
      stdlib.checkedBigNumberify('./auth.rsh:104:10:decimal', stdlib.UInt_max, '0'),
      [[stdlib.checkedBigNumberify('./auth.rsh:104:14:decimal', stdlib.UInt_max, '0'), v1764]]
    ],
    sim_p: async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => {
        sim_txn_ctr = sim_txn_ctr.sub(1);
        return sim_txn_ctr;
      };

      stdlib.simMapDupe(sim_r, 0, map0);

      const {
        data: [v1964],
        secs: v1966,
        time: v1965,
        didSend: v1379,
        from: v1963
      } = txn1;

      switch (v1964[0]) {
        case 'buyInviteTok0_94': {
          const v1967 = v1964[1];

          break;
        }
        case 'buyLikeTok0_94': {
          const v2158 = v1964[1];

          break;
        }
        case 'getInitialInvite0_94': {
          const v2349 = v1964[1];
          sim_r.txns.push({
            kind: 'api',
            who: 'getInitialInvite'
          });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1963), null);
          const v2396 =
            v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
          const v2397 =
            v2396[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
          await stdlib.simMapSet(sim_r, 0, v1963, null);
          const v2518 = stdlib.sub(
            v2397,
            stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
          );
          const v2520 = stdlib.Array_set(v2396, '0', v2518);
          const v2521 = stdlib.Array_set(
            v1822,
            stdlib.checkedBigNumberify('./auth.rsh:107:60:application', stdlib.UInt_max, '0'),
            v2520
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1963,
            tok: v1764
          });
          const v2522 =
            v2521[
              stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '1')
            ];
          const v2523 =
            v2522[
              stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '0')
            ];
          const v2527 = stdlib.sub(
            v2523,
            stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
          );
          const v2529 = stdlib.Array_set(v2522, '0', v2527);
          const v2530 = stdlib.Array_set(
            v2521,
            stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '1'),
            v2529
          );
          sim_r.txns.push({
            kind: 'from',
            to: v1963,
            tok: v1789
          });
          const v2531 = null;
          const v2532 = await txn1.getOutput('getInitialInvite', 'v2531', ctc0, v2531);

          const v2537 = stdlib.safeAdd(
            v1817,
            stdlib.checkedBigNumberify('./auth.rsh:111:23:decimal', stdlib.UInt_max, '1')
          );
          const v2538 = stdlib.safeAdd(
            v1819,
            stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
          );
          const v3039 = v1816;
          const v3040 = v2537;
          const v3041 = v1818;
          const v3042 = v2538;
          const v3044 = v2530;
          const v3045 = stdlib.lt(
            v2537,
            stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
          );
          sim_r.isHalt = false;

          break;
        }
      }
      return sim_r;
    },
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc3, ctc3, ctc3, ctc3, ctc6, ctc4, ctc8],
    waitIfNotPresent: false
  });
  const {
    data: [v1964],
    secs: v1966,
    time: v1965,
    didSend: v1379,
    from: v1963
  } = txn1;
  switch (v1964[0]) {
    case 'buyInviteTok0_94': {
      const v1967 = v1964[1];
      return;
      break;
    }
    case 'buyLikeTok0_94': {
      const v2158 = v1964[1];
      return;
      break;
    }
    case 'getInitialInvite0_94': {
      const v2349 = v1964[1];
      undefined /* setApiDetails */;
      stdlib.assert(v1834, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:100:12:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'initial invites gone',
        who: 'getInitialInvite'
      });
      const v2389 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1963), null);
      const v2390 = {
        None: 0,
        Some: 1
      }[v2389[0]];
      const v2391 = stdlib.eq(
        v2390,
        stdlib.checkedBigNumberify('reach standard library:38:41:application', stdlib.UInt_max, '1')
      );
      const v2392 = v2391 ? false : true;
      stdlib.assert(v2392, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:67:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:101:27:application call to "checkUsrAlreadyExist" (defined at: ./auth.rsh:66:40:function exp)',
          'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'already received inital invite. You can purchase more like tokens tho :)',
        who: 'getInitialInvite'
      });
      const v2396 =
        v1822[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
      const v2397 =
        v2396[stdlib.checkedBigNumberify('./auth.rsh:74:18:application', stdlib.UInt_max, '0')];
      const v2398 = stdlib.ge(
        v2397,
        stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
      );
      stdlib.assert(v2398, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:73:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:82:27:application call to "chkCtcInviteTokBal" (defined at: ./auth.rsh:72:37:function exp)',
          'at ./auth.rsh:102:19:application call to "chkCtcTokBal" (defined at: ./auth.rsh:81:31:function exp)',
          'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'not enough invite tokens',
        who: 'getInitialInvite'
      });
      const v2401 =
        v1822[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '1')];
      const v2402 =
        v2401[stdlib.checkedBigNumberify('./auth.rsh:79:22:application', stdlib.UInt_max, '0')];
      const v2403 = stdlib.ge(
        v2402,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      stdlib.assert(v2403, {
        at: 'reach standard library:57:5:application',
        fs: [
          'at ./auth.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)',
          'at ./auth.rsh:83:25:application call to "chkCtcLikeTokBal" (defined at: ./auth.rsh:78:35:function exp)',
          'at ./auth.rsh:102:19:application call to "chkCtcTokBal" (defined at: ./auth.rsh:81:31:function exp)',
          'at ./auth.rsh:99:36:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:99:36:function exp)',
          'at ./auth.rsh:58:76:application call to [unknown function] (defined at: ./auth.rsh:58:76:function exp)',
          'at ./auth.rsh:98:14:application call to [unknown function] (defined at: ./auth.rsh:98:14:function exp)'
        ],
        msg: 'not enough like tokens',
        who: 'getInitialInvite'
      });
      await stdlib.mapSet(map0, v1963, null);
      const v2518 = stdlib.sub(
        v2397,
        stdlib.checkedBigNumberify('./auth.rsh:4:33:decimal', stdlib.UInt_max, '1')
      );
      const v2520 = stdlib.Array_set(v2396, '0', v2518);
      const v2521 = stdlib.Array_set(
        v1822,
        stdlib.checkedBigNumberify('./auth.rsh:107:60:application', stdlib.UInt_max, '0'),
        v2520
      );
      const v2522 =
        v2521[stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '1')];
      const v2523 =
        v2522[stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '0')];
      const v2527 = stdlib.sub(
        v2523,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      const v2529 = stdlib.Array_set(v2522, '0', v2527);
      const v2530 = stdlib.Array_set(
        v2521,
        stdlib.checkedBigNumberify('./auth.rsh:108:50:application', stdlib.UInt_max, '1'),
        v2529
      );
      const v2531 = null;
      const v2532 = await txn1.getOutput('getInitialInvite', 'v2531', ctc0, v2531);
      if (v1379) {
        stdlib.protect(ctc0, await interact.out(v2349, v2532), {
          at: './auth.rsh:99:11:application',
          fs: [
            'at ./auth.rsh:99:11:application call to [unknown function] (defined at: ./auth.rsh:99:11:function exp)',
            'at ./auth.rsh:109:12:application call to "k" (defined at: ./auth.rsh:105:11:function exp)',
            'at ./auth.rsh:105:11:application call to [unknown function] (defined at: ./auth.rsh:105:11:function exp)'
          ],
          msg: 'out',
          who: 'getInitialInvite'
        });
      } else {
      }

      const v2537 = stdlib.safeAdd(
        v1817,
        stdlib.checkedBigNumberify('./auth.rsh:111:23:decimal', stdlib.UInt_max, '1')
      );
      const v2538 = stdlib.safeAdd(
        v1819,
        stdlib.checkedBigNumberify('./auth.rsh:7:25:decimal', stdlib.UInt_max, '100')
      );
      const v3039 = v1816;
      const v3040 = v2537;
      const v3041 = v1818;
      const v3042 = v2538;
      const v3044 = v2530;
      const v3045 = stdlib.lt(
        v2537,
        stdlib.checkedBigNumberify('./auth.rsh:5:29:decimal', stdlib.UInt_max, '1000')
      );
      return;

      break;
    }
  }
}
export async function buyInviteTok(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for buyInviteTok expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for buyInviteTok expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _buyInviteTok3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function buyLikeTok(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(`The backend for buyLikeTok expects to receive a contract as its first argument.`)
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for buyLikeTok expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _buyLikeTok3(ctcTop, interact);
  }
  throw stdlib.apiStateMismatchError(
    { _stateSourceMap },
    [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3')],
    stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step)
  );
}
export async function getInitialInvite(ctcTop, interact) {
  if (typeof ctcTop !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(
      new Error(
        `The backend for getInitialInvite expects to receive a contract as its first argument.`
      )
    );
  }
  if (typeof interact !== 'object') {
    return Promise.reject(
      new Error(
        `The backend for getInitialInvite expects to receive an interact object as its second argument.`
      )
    );
  }
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep();
  if (step == 3) {
    return _getInitialInvite3(ctcTop, interact);
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T12",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
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
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_buyInviteTok0_94",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_buyLikeTok0_94",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_getInitialInvite0_94",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v1964",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
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
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1763",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1788",
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
    "name": "_reach_oe_v2068",
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
    "name": "_reach_oe_v2292",
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
    "name": "_reach_oe_v2531",
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
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
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
                    "internalType": "enum _enum_T13",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_buyInviteTok0_94",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_buyLikeTok0_94",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_getInitialInvite0_94",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T13",
                "name": "v1964",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
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
    "name": "areFreeInvitesAvailable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyInviteTok",
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
    "name": "buyLikeTok",
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
    "name": "getInitialInvite",
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
    "name": "inviteToken",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "inviteToksDistrbuted",
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
        "internalType": "address payable",
        "name": "v3050",
        "type": "address"
      }
    ],
    "name": "isUser",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "likeToken",
    "outputs": [
      {
        "internalType": "address payable",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "likeToksDistributed",
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
  Bytecode: `0x608060405260405162003b1138038062003b11833981016040819052620000269162000aaf565b600080554360035562000038620007db565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a180516000908190528151602090810182905282516040019190915281518183018051919091528251905190910152620000bb3415600d6200065c565b6b24b73b34ba32902a37b5b2b760a11b60408281019182526224a72b60e91b6060840152608083018051600090819052815160209081018290529151830181905260a085015291518151928301520160408051601f198184030181529082905260608301516001600160c01b03191660208301529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a0860151602084015291016040516020818303038152906040526000196000604051620001a890620008ce565b620001b99695949392919062000b80565b604051809103906000f080158015620001d6573d6000803e3d6000fd5b506001600160a01b031660c0820181905260e082018190526040519081527f959429b3b9ddb26bcbbfae7f829e0737ddde8a6812ac296457426d90da3946a99060200160405180910390a1620002948160200151600060405180606001604052806000198152602001856020015160006002811062000259576200025962000b1a565b6020020151602001518152602001856020015160006002811062000281576200028162000b1a565b6020020151604001511515905262000686565b61010082018181526040805160608101825282515151815260001960208201529151620002cc93926000929091908201908362000281565b6101208201818152604080516060810190915281515151815290516200031192916000916020820190835b602090810291909101518101518252600091015262000686565b610140820152692634b5b2902a37b5b2b760b11b6101608201819052634c494b4560e01b6101808301526040805160208101929092520160408051601f19818403018152908290526101808301516001600160c01b03191660208301529060280160408051808303601f1901815282825260808581015180516020808301519286015190870191909152938501526060840192909252910160408051601f1981840301815282825260a0860151602084015291016040516020818303038152906040526000196000604051620003e790620008ce565b620003f89695949392919062000b80565b604051809103906000f08015801562000415573d6000803e3d6000fd5b506001600160a01b03166101a082018190526101c082018190526040519081527fd2c487141ef6a44861585055b99734ca428d81627d13b8fbd543fd564869d3fe9060200160405180910390a160e08101516101e0820180516001600160a01b03928316905251516101c0830151620004a6929081169116146200049b5760016200049e565b60005b600e6200065c565b62000509816101400151600160405180606001604052806000198152602001856101400151600160028110620004e057620004e062000b1a565b602002015160200151815260200185610140015160016002811062000281576200028162000b1a565b8161020001819052506200054c8160e001516001600160a01b0316826101c001516001600160a01b0316146200054157600162000544565b60005b600f6200065c565b620005af816102000151600160405180606001604052808561020001516001600281106200057e576200057e62000b1a565b6020020151600001518152602001600019815260200185610200015160016002811062000281576200028162000b1a565b610220820152620005bf620008dc565b60e082015181516001600160a01b0391821690526101c0830151825191166020918201528082018051600090819052815183018190528151604090810182905282516060908101929092529151436080909101526102208501805183519283019093528051840151518252516200063f93600192919082019083620002f7565b602082015160a00152620006538162000709565b50505062000cfd565b81620006825760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6200069062000907565b60005b6002811015620006e657848160028110620006b257620006b262000b1a565b6020020151828260028110620006cc57620006cc62000b1a565b602002015280620006dd8162000beb565b91505062000693565b5081818460028110620006fd57620006fd62000b1a565b60200201529392505050565b60408051602081019091526000815260208083015101516103e81181526200073062000954565b8251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091528151830151606080860191909152825182015160808601528251015160a08086019190915291519091015160c08401528351151560e084015260036000554360015551620007af9183910162000c15565b60405160208183030381529060405260029080519060200190620007d5929190620009b3565b50505050565b604080516102a081019091526000610240820181815261026083018290526102808301919091528152602081016200081262000907565b8152600060208083018290526040808401839052805160608082018352848252928101849052908101839052908301526080820181905260a0820181905260c082015260e0016200086262000907565b81526020016200087162000907565b81526020016200088062000907565b81526000602082018190526040820181905260608201819052608082015260a001620008ab62000a42565b8152602001620008ba62000907565b8152602001620008c962000907565b905290565b6110878062002a8a83390190565b604080516080810182526000918101828152606082019290925290815260208101620008c962000a60565b60405180604001604052806002905b6200093d604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081620009165790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001620009a662000907565b8152600060209091015290565b828054620009c19062000cc0565b90600052602060002090601f016020900481019282620009e5576000855562000a30565b82601f1062000a0057805160ff191683800117855562000a30565b8280016001018555821562000a30579182015b8281111562000a3057825182559160200191906001019062000a13565b5062000a3e92915062000a98565b5090565b60405180602001604052806001906020820280368337509192915050565b6040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001620008c962000907565b5b8082111562000a3e576000815560010162000a99565b60006040828403121562000ac257600080fd5b604080519081016001600160401b038111828210171562000af357634e487b7160e01b600052604160045260246000fd5b604052825181526020830151801515811462000b0e57600080fd5b60208201529392505050565b634e487b7160e01b600052603260045260246000fd5b6000815180845260005b8181101562000b585760208185018101518683018201520162000b3a565b8181111562000b6b576000602083870101525b50601f01601f19169290920160200192915050565b60c08152600062000b9560c083018962000b30565b828103602084015262000ba9818962000b30565b9050828103604084015262000bbf818862000b30565b9050828103606084015262000bd5818762000b30565b6080840195909552505060a00152949350505050565b600060001982141562000c0e57634e487b7160e01b600052601160045260246000fd5b5060010190565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101519085015260c0808601516101a08601949291860160005b600281101562000c9e578251805183528581015186840152860151151586830152918401919083019060010162000c6c565b50505050505060e083015162000cb961018084018215159052565b5092915050565b600181811c9082168062000cd557607f821691505b6020821081141562000cf757634e487b7160e01b600052602260045260246000fd5b50919050565b611d7d8062000d0d6000396000f3fe6080604052600436106100d55760003560e01c80637c16a17111610079578063ab53f2c611610056578063ab53f2c6146101ff578063af92929214610222578063dbcfb6471461022a578063f9ebf6b41461023257005b80637c16a171146101c257806383230757146101d7578063a38d1178146101ec57005b80633bc5b7bf116100b25780633bc5b7bf146101335780634209fff114610160578063579393781461018057806378c33635146101ad57005b806304ef0596146100de57806305fb31dc146101065780631e93b0f11461011e57005b366100dc57005b005b3480156100ea57600080fd5b506100f3610247565b6040519081526020015b60405180910390f35b61010e610259565b60405190151581526020016100fd565b34801561012a57600080fd5b506003546100f3565b34801561013f57600080fd5b5061015361014e3660046117e3565b61029e565b6040516100fd9190611816565b34801561016c57600080fd5b5061010e61017b3660046117e3565b6102ca565b34801561018c57600080fd5b506101956102f4565b6040516001600160a01b0390911681526020016100fd565b3480156101b957600080fd5b50610195610300565b3480156101ce57600080fd5b5061010e61030c565b3480156101e357600080fd5b506001546100f3565b6100dc6101fa36600461184f565b610318565b34801561020b57600080fd5b50610214610351565b6040516100fd929190611893565b61010e6103ee565b61010e610433565b34801561023e57600080fd5b506100f3610471565b6000806102538161047d565b91505090565b60006102636115b9565b6020818101515160029052604080516060810182526000808252928101839052908101919091526102948282610546565b6040015192915050565b60408051606081018252600080825260208201819052918101919091526102c482610d32565b92915050565b60408051602081019091526001600160a01b03821681526000906102ed81610e0a565b9392505050565b60008061025381610eee565b60008061025381610faf565b60008061025381611073565b604080516060810182526000808252602082018190529181019190915261034d61034736849003840184611983565b82610546565b5050565b60006060600054600280805461036690611a24565b80601f016020809104026020016040519081016040528092919081815260200182805461039290611a24565b80156103df5780601f106103b4576101008083540402835291602001916103df565b820191906000526020600020905b8154815290600101906020018083116103c257829003601f168201915b50505050509050915091509091565b60006103f86115b9565b6020818101515160019052604080516060810182526000808252928101839052908101919091526104298282610546565b6020015192915050565b600061043d6115b9565b602081810151516000908190526040805160608101825282815292830182905282015261046a8282610546565b5192915050565b60008061025381611137565b6000600360005414156105355760006002805461049990611a24565b80601f01602080910402602001604051908101604052809291908181526020018280546104c590611a24565b80156105125780601f106104e757610100808354040283529160200191610512565b820191906000526020600020905b8154815290600101906020018083116104f557829003601f168201915b505050505080602001905181019061052a9190611af8565b60a001519392505050565b6105416000600c6111f7565b919050565b610556600360005414601f6111f7565b815161057190158061056a57508251600154145b60206111f7565b60008080556002805461058390611a24565b80601f01602080910402602001604051908101604052809291908181526020018280546105af90611a24565b80156105fc5780601f106105d1576101008083540402835291602001916105fc565b820191906000526020600020905b8154815290600101906020018083116105df57829003601f168201915b50505050508060200190518101906106149190611af8565b905061061e6115fe565b7feb31b6250f6c9f0fcfe4c5819ebfb30c7237cb22fa161da5fa3e30747da0249b338560405161064f929190611ba1565b60405180910390a1600060208501515151600281111561067157610671611800565b1415610878576106ad600161068533610d32565b51600181111561069757610697611800565b146106a35760016106a6565b60005b60106111f7565b60c082015151516106c3906001111560116111f7565b6106d66103e883606001511160126111f7565b6106e46004341460136111f7565b6106fe6106f7338460000151600061121d565b60146111f7565b815161070c90336001611233565b336000908152600460209081526040808320805462ff00ff19166001179055519182527f5c493220bc9f6d073a452b59ebe0ee25c9d869073d71988e9397e0267c193fa2910160405180910390a16000835261076661162b565b825181516001600160a01b03918216905260208085015183519216910152604083015161079490600161124c565b60208201515260608301516107aa90600161124c565b6020808301805190910191909152608080850151825160409081019190915260a0860151835160609081019190915292514392019190915260c08501805182519384019092525161086092600091819061080d90845b6020020151516000190190565b81526020018760c0015160006002811061082957610829611c07565b60200201516020015181526020018760c0015160006002811061084e5761084e611c07565b60200201516040015115159052611299565b602082015160a001526108728161130d565b50610d2c565b600160208501515151600281111561089257610892611800565b1415610aeb5760c082015160200151516108b1906064111560156111f7565b6108bf6001341460166111f7565b61093b8260c00151600060405180606001604052806108fa8760c001516000600281106108ee576108ee611c07565b60200201515160010190565b81526020018660c0015160006002811061091657610916611c07565b60200201516020015181526020018660c0015160006002811061084e5761084e611c07565b8152815161095790610950903390600161121d565b60176111f7565b8051602001515161096d906064111560186111f7565b6109ba81600001516000604051806060016040528061099c866000015160006002811061080057610800611c07565b8152855151602090810151908201528551604090910190600061084e565b602082015281516109cd90336001611233565b6109dd8260200151336064611233565b604051600081527f36532bbaf3ef2d557d3e79f828b9c31515aedabfd3f43ed65c9b74c0085cea6e9060200160405180910390a160006020840152610a2061162b565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015181830180519190915260608501519051909101526080830151610a6b90600161124c565b60208201516040015260a0830151610a8490606461124c565b602080830180516060908101939093525143608090910152830180516040805193840190529051610860926001918190610ac790845b6020020151516063190190565b8152602087810180518201518201519183019190915251604090910190600161084e565b6002602085015151516002811115610b0557610b05611800565b1415610d2c57610b1a8260e0015160196111f7565b610b506001610b2833610d32565b516001811115610b3a57610b3a611800565b14610b46576001610b49565b60005b601a6111f7565b60c08201515151610b669060011115601b6111f7565b60c08201516020015151610b7f9060641115601c6111f7565b610b8b3415601d6111f7565b610ba5610b9e338460000151600061121d565b601e6111f7565b33600090815260046020526040808220805462ff00ff1916600117905560c0840180518251606081019093529051610be69391929081906108fa9084610800565b60408201528151610bf990336001611233565b610c098260200151336064611233565b604051600081527fe23c77650093f6301365517def043c056a8a72fed6693cdcf83369db8ef8a8ff9060200160405180910390a160006040840152610c4c61162b565b825181516001600160a01b0391821690526020808501518351921691810191909152604084015190820151526060830151610c8890600161124c565b6020808301805190910191909152608084015190516040015260a0830151610cb190606461124c565b602082018051606090810192909252514360809091015260408084018051825193840190925251610860926001918190610ceb9084610aba565b81526020018660400151600160028110610d0757610d07611c07565b6020020151602001518152602001866040015160016002811061084e5761084e611c07565b50505050565b604080516060810182526000808252602082018190529181019190915260016001600160a01b03831660009081526004602052604090205460ff166001811115610d7e57610d7e611800565b1415610dfb576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff166001811115610dbf57610dbf611800565b6001811115610dd057610dd0611800565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b60008082526020820152919050565b600060036000541415610ee257600060028054610e2690611a24565b80601f0160208091040260200160405190810160405280929190818152602001828054610e5290611a24565b8015610e9f5780601f10610e7457610100808354040283529160200191610e9f565b820191906000526020600020905b815481529060010190602001808311610e8257829003601f168201915b5050505050806020019051810190610eb79190611af8565b90506001610ec88460000151610d32565b516001811115610eda57610eda611800565b149392505050565b6105416000600a6111f7565b600060036000541415610fa357600060028054610f0a90611a24565b80601f0160208091040260200160405190810160405280929190818152602001828054610f3690611a24565b8015610f835780601f10610f5857610100808354040283529160200191610f83565b820191906000526020600020905b815481529060010190602001808311610f6657829003601f168201915b5050505050806020019051810190610f9b9190611af8565b519392505050565b610541600060086111f7565b60006003600054141561106757600060028054610fcb90611a24565b80601f0160208091040260200160405190810160405280929190818152602001828054610ff790611a24565b80156110445780601f1061101957610100808354040283529160200191611044565b820191906000526020600020905b81548152906001019060200180831161102757829003601f168201915b505050505080602001905181019061105c9190611af8565b602001519392505050565b6105416000600b6111f7565b60006003600054141561112b5760006002805461108f90611a24565b80601f01602080910402602001604051908101604052809291908181526020018280546110bb90611a24565b80156111085780601f106110dd57610100808354040283529160200191611108565b820191906000526020600020905b8154815290600101906020018083116110eb57829003601f168201915b50505050508060200190518101906111209190611af8565b60e001519392505050565b610541600060076111f7565b6000600360005414156111ef5760006002805461115390611a24565b80601f016020809104026020016040519081016040528092919081815260200182805461117f90611a24565b80156111cc5780601f106111a1576101008083540402835291602001916111cc565b820191906000526020600020905b8154815290600101906020018083116111af57829003601f168201915b50505050508060200190518101906111e49190611af8565b606001519392505050565b610541600060095b8161034d5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b600061122b838530856113d3565b949350505050565b61123e8383836114ad565b61124757600080fd5b505050565b6000826112598382611c33565b91508110156102c45760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611214565b6112a1611654565b60005b60028110156112ed578481600281106112bf576112bf611c07565b60200201518282600281106112d6576112d6611c07565b6020020152806112e581611c4b565b9150506112a4565b508181846002811061130157611301611c07565b60200201529392505050565b60408051602081019091526000815260208083015101516103e811815261133261169f565b8251516001600160a01b0390811682528351602090810151909116818301528084018051516040808501919091528151830151606080860191909152825182015160808601528251015160a08086019190915291519091015160c08401528351151560e0840152600360005543600155516113af91839101611c66565b60405160208183030381529060405260029080519060200190610d2c9291906116fc565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161143a91611d0e565b60006040518083038185875af1925050503d8060008114611477576040519150601f19603f3d011682016040523d82523d6000602084013e61147c565b606091505b509150915061148d8282600161157e565b50808060200190518101906114a29190611d2a565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392839291881691839161150c91611d0e565b60006040518083038185875af1925050503d8060008114611549576040519150601f19603f3d011682016040523d82523d6000602084013e61154e565b606091505b509150915061155f8282600261157e565b50808060200190518101906115749190611d2a565b9695505050505050565b6060831561158d5750816102ed565b82511561159d5782518084602001fd5b60405163100960cb60e01b815260048101839052602401611214565b6040518060400160405280600081526020016115f96040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b905290565b6040518060600160405280611611611654565b815260200161161e611654565b81526020016115f9611654565b6040805160808101825260009181018281526060820192909252908152602081016115f9611780565b60405180604001604052806002905b611689604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816116635790505090565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016116ef611654565b8152600060209091015290565b82805461170890611a24565b90600052602060002090601f01602090048101928261172a5760008555611770565b82601f1061174357805160ff1916838001178555611770565b82800160010185558215611770579182015b82811115611770578251825591602001919060010190611755565b5061177c9291506117b6565b5090565b6040518060c0016040528060008152602001600081526020016000815260200160008152602001600081526020016115f9611654565b5b8082111561177c57600081556001016117b7565b6001600160a01b03811681146117e057600080fd5b50565b6000602082840312156117f557600080fd5b81356102ed816117cb565b634e487b7160e01b600052602160045260246000fd5b815160608201906002811061182d5761182d611800565b8083525060208301511515602083015260408301511515604083015292915050565b600060a0828403121561186157600080fd5b50919050565b60005b8381101561188257818101518382015260200161186a565b83811115610d2c5750506000910152565b82815260406020820152600082518060408401526118b8816060850160208701611867565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715611906576119066118cd565b60405290565b6040516020810167ffffffffffffffff81118282101715611906576119066118cd565b6040516080810167ffffffffffffffff81118282101715611906576119066118cd565b6040516060810167ffffffffffffffff81118282101715611906576119066118cd565b80151581146117e057600080fd5b600081830360a081121561199657600080fd5b61199e6118e3565b833581526080601f19830112156119b457600080fd5b6119bc61190c565b91506119c661192f565b6020850135600381106119d857600080fd5b815260408501356119e881611975565b602082015260608501356119fb81611975565b60408201526080850135611a0e81611975565b6060820152825260208101919091529392505050565b600181811c90821680611a3857607f821691505b6020821081141561186157634e487b7160e01b600052602260045260246000fd5b8051610541816117cb565b805161054181611975565b600082601f830112611a8057600080fd5b611a886118e3565b8060c0840185811115611a9a57600080fd5b845b81811015611aed5760608188031215611ab55760008081fd5b611abd611952565b8151815260208083015181830152604080840151611ada81611975565b9083015290855290930192606001611a9c565b509095945050505050565b60006101a08284031215611b0b57600080fd5b604051610100810181811067ffffffffffffffff82111715611b2f57611b2f6118cd565b604052611b3b83611a59565b8152611b4960208401611a59565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a0820152611b838460c08501611a6f565b60c0820152611b956101808401611a64565b60e08201529392505050565b6001600160a01b0383168152815160208083019190915282015151805160c08301919060038110611bd457611bd4611800565b806040850152506020810151151560608401526040810151151560808401526060810151151560a0840152509392505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611c4657611c46611c1d565b500190565b6000600019821415611c5f57611c5f611c1d565b5060010190565b81516001600160a01b0390811682526020808401519091168183015260408084015181840152606080850151818501526080808601519085015260a0858101519085015260c0808601516101a08601949291860160005b6002811015611ced5782518051835285810151868401528601511515868301529184019190830190600101611cbd565b50505050505060e0830151611d0761018084018215159052565b5092915050565b60008251611d20818460208701611867565b9190910192915050565b600060208284031215611d3c57600080fd5b81516102ed8161197556fea2646970667358221220b1b4da923a0b2b6a6e18404dd25acf3bad69c93b7bd3616375faeffd741b066564736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea264697066735822122018606c48eb685504ce9eaba3f70d55ba9141a412d7a219527340f641569aa91764736f6c634300080c0033`,
  BytecodeLen: 15121,
  Which: `oD`,
  version: 8,
  views: {
    areFreeInvitesAvailable: `areFreeInvitesAvailable`,
    inviteToken: `inviteToken`,
    inviteToksDistrbuted: `inviteToksDistrbuted`,
    isUser: `isUser`,
    likeToken: `likeToken`,
    likeToksDistributed: `likeToksDistributed`
  }
};
export const _stateSourceMap = {
  2: {
    at: './auth.rsh:159:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
  },
  3: {
    at: './auth.rsh:58:76:after expr stmt semicolon',
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
  buyInviteTok: buyInviteTok,
  buyLikeTok: buyLikeTok,
  getInitialInvite: getInitialInvite
};
export const _APIs = {
  buyInviteTok: buyInviteTok,
  buyLikeTok: buyLikeTok,
  getInitialInvite: getInitialInvite
};
