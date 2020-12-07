const r = require('alan-js-runtime')
const _0b9ad98e_69d7_4bcc_b1bc_6b377b7871f8 = "https://raw.githubusercontent.com/ledwards/advent-2020/main/data/expenses.txt"
const _4af2bbef_1999_47a4_8e86_29db6fa6a06f = ""
const _ee82fec3_fe5b_4fb5_b279_0b64d542f6a2 = "\n"
const _b8ce9604_a488_42d1_b156_9cbe98425642 = 2020
const _6e7ea68e_4edc_4829_9207_5a2102456b1f = 0
const _99c283a1_6695_46eb_9a81_a6ab60690c67 = 1
const _62cbbbe0_d6d2_4717_8d1f_1aff0ca89991 = 128
const _889a9aa7_5db4_4062_96ea_081b52bead0d = 2
const _701fc425_e4e2_43c7_a4be_4f6417d54345 = 8
const _35428e1b_bea2_42dd_8631_8e2630a51d24 = 3
const _6feff257_7cac_496c_a9a8_4a77ad1024f7 = 200
const _ab805fb0_5f6c_462b_8f82_019ec0aefd61 = "Content-Length"
const _7149e16c_b93d_4550_9a93_96173980d40c = "0"
const _c4cf53c9_b962_4fba_b67d_9dce2922bfaa = 4
r.on('_start', async () => {
    const _73a4a962_3289_4fdd_af5d_3043cd68de4b = await r.httpget(_0b9ad98e_69d7_4bcc_b1bc_6b377b7871f8)
    const _b960bb89_3b68_4792_b154_23b5a539f9a9 = r.getOrRS(_73a4a962_3289_4fdd_af5d_3043cd68de4b, _4af2bbef_1999_47a4_8e86_29db6fa6a06f)
    const _9cfe5c2c_d380_4e81_a8bd_0c62306d1141 = r.trim(_b960bb89_3b68_4792_b154_23b5a539f9a9)
    const _5f32b2c5_47fc_4ce4_834e_4a63586c4b95 = r.split(_9cfe5c2c_d380_4e81_a8bd_0c62306d1141, _ee82fec3_fe5b_4fb5_b279_0b64d542f6a2)
    const _973fa6e5_9374_4286_8747_8b814f6fc946 = async (n) => {
        const _bec58fda_52a4_44cf_88d4_ef51306a7589 = r.stri64(n)
        return _bec58fda_52a4_44cf_88d4_ef51306a7589
      }
    const _9d295286_23f8_44e4_903b_cd583004c02b = await r.map(_5f32b2c5_47fc_4ce4_834e_4a63586c4b95, _973fa6e5_9374_4286_8747_8b814f6fc946)
    const _e49ed660_b01e_4bbc_a9f7_f07a26c592d2 = async (a) => {
        const _2726db98_209b_400a_8246_3766f16e443d = async (b) => {
            const _6b837d22_3d87_445e_9ac8_f7d5b4838d64 = async (cc) => {
                const _18f27e5c_13c2_4517_90d9_74119813e799 = r.addi64(a, b)
                const _4111167a_8780_40f3_b6e4_f8c22d71f536 = r.addi64(_18f27e5c_13c2_4517_90d9_74119813e799, cc)
                const _9051d2a5_511a_4ca8_8a62_030ac5e7b282 = r.eqi64(_4111167a_8780_40f3_b6e4_f8c22d71f536, _b8ce9604_a488_42d1_b156_9cbe98425642)
                return _9051d2a5_511a_4ca8_8a62_030ac5e7b282
              }
            const _5c141260_261a_410e_8523_cd4d25ba7cf4 = await r.find(_9d295286_23f8_44e4_903b_cd583004c02b, _6b837d22_3d87_445e_9ac8_f7d5b4838d64)
            const _6912ec4f_5429_4504_85e4_83a724b59a39 = r.isOk(_5c141260_261a_410e_8523_cd4d25ba7cf4)
            const _f0e848a5_39ef_43c4_96a3_502656c2b78e = async () => {
                const _943cbe1b_7b18_4357_8a95_fd282fde4e25 = r.getOrR(_5c141260_261a_410e_8523_cd4d25ba7cf4, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
                const _31593ecb_4b4d_40fd_a5dc_c04cd8c362f3 = r.muli64(a, b)
                const _c5f05049_72e5_4c7e_ae57_2f0a59d29fd6 = r.muli64(_31593ecb_4b4d_40fd_a5dc_c04cd8c362f3, _943cbe1b_7b18_4357_8a95_fd282fde4e25)
                const _4c8a0dfb_5482_4e36_a7c9_cd46ddbd8665 = r.i64str(_c5f05049_72e5_4c7e_ae57_2f0a59d29fd6)
                const _7c706e08_5e33_44ef_9013_dd83b8763048 = r.catstr(_4c8a0dfb_5482_4e36_a7c9_cd46ddbd8665, _ee82fec3_fe5b_4fb5_b279_0b64d542f6a2)
                r.emit('stdout', _7c706e08_5e33_44ef_9013_dd83b8763048)
                r.emit('exit', _6e7ea68e_4edc_4829_9207_5a2102456b1f)
              }
            const _eb0a83e8_2f76_4b42_85f7_5b4449ee7df7 = await r.condfn(_6912ec4f_5429_4504_85e4_83a724b59a39, _f0e848a5_39ef_43c4_96a3_502656c2b78e)
          }
        const _ec8854df_9b91_47a7_861c_634fbedc24ab = await r.each(_9d295286_23f8_44e4_903b_cd583004c02b, _2726db98_209b_400a_8246_3766f16e443d)
      }
    const _de5aae3e_2403_4b23_be02_86d7919f644d = await r.each(_9d295286_23f8_44e4_903b_cd583004c02b, _e49ed660_b01e_4bbc_a9f7_f07a26c592d2)
    r.emit('exit', _6e7ea68e_4edc_4829_9207_5a2102456b1f)
  })
r.on('__conn', async (conn) => {
    const _e955644e_b630_4be8_87f3_8aad0f6807d9 = r.register(conn, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _cd4470c0_e7a6_466d_b43f_388c247c2c60 = r.register(conn, _99c283a1_6695_46eb_9a81_a6ab60690c67)
    const _d6c8ad58_534a_49ac_a540_093f42ede6bc = r.newarr(_6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _caf8fb6d_1e8e_404e_8028_c1fc6320d882 = r.newarr(_99c283a1_6695_46eb_9a81_a6ab60690c67)
    r.pusharr(_caf8fb6d_1e8e_404e_8028_c1fc6320d882, _d6c8ad58_534a_49ac_a540_093f42ede6bc, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _9badd61d_a746_4789_903b_1cee5a9440f3 = r.reparr(_caf8fb6d_1e8e_404e_8028_c1fc6320d882, _62cbbbe0_d6d2_4717_8d1f_1aff0ca89991)
    let _c49562cc_7d52_4b29_a90b_32ed360d68fc = r.newarr(_889a9aa7_5db4_4062_96ea_081b52bead0d)
    r.pusharr(_c49562cc_7d52_4b29_a90b_32ed360d68fc, _cd4470c0_e7a6_466d_b43f_388c247c2c60, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_c49562cc_7d52_4b29_a90b_32ed360d68fc, _9badd61d_a746_4789_903b_1cee5a9440f3, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _1a3f53b4_be15_4f00_843c_9fd732c71910 = async (kv, i) => {
        const _6fb5ae07_81c7_422b_b9e9_93f0162a510c = r.register(kv, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
        const _628a6059_a3f1_4879_8626_4b1591ee2aa6 = r.hashv(_6fb5ae07_81c7_422b_b9e9_93f0162a510c)
        const _d16ee879_0e4b_4bc8_9860_3b1948729e04 = r.absi64(_628a6059_a3f1_4879_8626_4b1591ee2aa6)
        const _4f6faf92_7ba3_4d68_97ac_86dd9ba7338e = r.register(_c49562cc_7d52_4b29_a90b_32ed360d68fc, _99c283a1_6695_46eb_9a81_a6ab60690c67)
        const _50a66df6_46f2_4a84_8aa1_26a26fb9cbe9 = r.lenarr(_4f6faf92_7ba3_4d68_97ac_86dd9ba7338e)
        const _815b3d91_a32d_49ce_8523_fa4dfd48f521 = r.modi64(_d16ee879_0e4b_4bc8_9860_3b1948729e04, _50a66df6_46f2_4a84_8aa1_26a26fb9cbe9)
        const _a0b022ae_d121_497f_abd8_8e98582b784d = r.register(_c49562cc_7d52_4b29_a90b_32ed360d68fc, _99c283a1_6695_46eb_9a81_a6ab60690c67)
        const _93a94393_8e90_418d_bad4_44b5da96b95d = r.resfrom(_a0b022ae_d121_497f_abd8_8e98582b784d, _815b3d91_a32d_49ce_8523_fa4dfd48f521)
        const _5fcc4cc1_1816_423a_97c4_437cc75285c4 = r.getR(_93a94393_8e90_418d_bad4_44b5da96b95d)
        r.pusharr(_5fcc4cc1_1816_423a_97c4_437cc75285c4, i, _701fc425_e4e2_43c7_a4be_4f6417d54345)
      }
    const _ea489714_034f_4f47_bda7_fe08ec879a6f = await r.eachl(_cd4470c0_e7a6_466d_b43f_388c247c2c60, _1a3f53b4_be15_4f00_843c_9fd732c71910)
    const _d4cfb984_3061_4440_b96e_a3d725484441 = r.register(conn, _889a9aa7_5db4_4062_96ea_081b52bead0d)
    const _4dd37fb4_e47f_4974_bf0b_72713d23711d = r.newarr(_35428e1b_bea2_42dd_8631_8e2630a51d24)
    r.pusharr(_4dd37fb4_e47f_4974_bf0b_72713d23711d, _e955644e_b630_4be8_87f3_8aad0f6807d9, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_4dd37fb4_e47f_4974_bf0b_72713d23711d, _c49562cc_7d52_4b29_a90b_32ed360d68fc, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_4dd37fb4_e47f_4974_bf0b_72713d23711d, _d4cfb984_3061_4440_b96e_a3d725484441, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _830d389b_54a5_46ec_b824_ab1b8d5bd006 = r.newarr(_6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _fff8daf6_7b5b_49b5_aad6_6a2a1c1961ab = r.newarr(_6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _f9776c14_0e6e_45a1_9a53_800588f54ca9 = r.newarr(_99c283a1_6695_46eb_9a81_a6ab60690c67)
    r.pusharr(_f9776c14_0e6e_45a1_9a53_800588f54ca9, _fff8daf6_7b5b_49b5_aad6_6a2a1c1961ab, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _a1bb5167_4736_42b6_b221_187487d14f79 = r.reparr(_f9776c14_0e6e_45a1_9a53_800588f54ca9, _62cbbbe0_d6d2_4717_8d1f_1aff0ca89991)
    let _92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c = r.newarr(_889a9aa7_5db4_4062_96ea_081b52bead0d)
    r.pusharr(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _830d389b_54a5_46ec_b824_ab1b8d5bd006, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _a1bb5167_4736_42b6_b221_187487d14f79, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _c505fb38_f107_4b70_b8ee_c43817bd72b9 = r.newarr(_889a9aa7_5db4_4062_96ea_081b52bead0d)
    r.pusharr(_c505fb38_f107_4b70_b8ee_c43817bd72b9, _ab805fb0_5f6c_462b_8f82_019ec0aefd61, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_c505fb38_f107_4b70_b8ee_c43817bd72b9, _7149e16c_b93d_4550_9a93_96173980d40c, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _89d78475_3495_41b3_abbf_685231ab0d9e = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _0dc57b4e_843f_49c4_9a36_0a12049243af = r.lenarr(_89d78475_3495_41b3_abbf_685231ab0d9e)
    const _a9aab17e_62a7_4ab2_918a_0ba32294e329 = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_a9aab17e_62a7_4ab2_918a_0ba32294e329, _c505fb38_f107_4b70_b8ee_c43817bd72b9, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    const _799b167a_5016_45cf_b55e_a878ff76226d = r.hashv(_ab805fb0_5f6c_462b_8f82_019ec0aefd61)
    const _8e20569d_7330_4eae_8fca_aa11ed5e0c54 = r.absi64(_799b167a_5016_45cf_b55e_a878ff76226d)
    const _1f5c1544_8364_4526_8cc2_0f50a73ebe7b = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _99c283a1_6695_46eb_9a81_a6ab60690c67)
    const _149f4487_9b93_45d7_82c8_34b7c4ed3513 = r.lenarr(_1f5c1544_8364_4526_8cc2_0f50a73ebe7b)
    const _df1e6375_e7d2_42f0_9635_238007e9cc9a = r.modi64(_8e20569d_7330_4eae_8fca_aa11ed5e0c54, _149f4487_9b93_45d7_82c8_34b7c4ed3513)
    const _ef412d60_612d_4303_b62d_20a11cdc3ec1 = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _99c283a1_6695_46eb_9a81_a6ab60690c67)
    const _98a60351_e690_4c09_9034_b2e611cf2a35 = r.resfrom(_ef412d60_612d_4303_b62d_20a11cdc3ec1, _df1e6375_e7d2_42f0_9635_238007e9cc9a)
    const _d111a52f_7b5b_48ba_a517_56d35cef59b4 = r.getR(_98a60351_e690_4c09_9034_b2e611cf2a35)
    const _f524e728_70de_454d_becc_b998a8c77fe4 = r.lenarr(_d111a52f_7b5b_48ba_a517_56d35cef59b4)
    const _72a39f45_4015_4e9e_899e_e3c4124fafb8 = r.eqi64(_f524e728_70de_454d_becc_b998a8c77fe4, _701fc425_e4e2_43c7_a4be_4f6417d54345)
    const _5c46f26b_5c26_48a0_bfc9_ec4a4db982b5 = async () => {
        const _0146484b_7f51_48b6_b016_e20d04af64d3 = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _99c283a1_6695_46eb_9a81_a6ab60690c67)
        const _4b89dc40_95d1_4191_8956_c558ff5f5ad4 = r.lenarr(_0146484b_7f51_48b6_b016_e20d04af64d3)
        const _40f49d41_c589_47ba_bb56_0e8afe5fecaa = r.muli64(_4b89dc40_95d1_4191_8956_c558ff5f5ad4, _889a9aa7_5db4_4062_96ea_081b52bead0d)
        const _009d9b07_253c_495b_a15a_602a0eae1af9 = r.newarr(_6e7ea68e_4edc_4829_9207_5a2102456b1f)
        const _08af337a_f07e_41c3_9be1_2ba83bf4ce91 = r.newarr(_99c283a1_6695_46eb_9a81_a6ab60690c67)
        r.pusharr(_08af337a_f07e_41c3_9be1_2ba83bf4ce91, _009d9b07_253c_495b_a15a_602a0eae1af9, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
        const _3c14d184_52e7_41f4_9918_ecd9bc24bffc = r.reparr(_08af337a_f07e_41c3_9be1_2ba83bf4ce91, _40f49d41_c589_47ba_bb56_0e8afe5fecaa)
        r.copytov(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _99c283a1_6695_46eb_9a81_a6ab60690c67, _3c14d184_52e7_41f4_9918_ecd9bc24bffc)
        const _a7bc8a59_7fda_4173_a9da_4eb968204b02 = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
        const _55325a26_364f_4fdd_967f_42443bbd1318 = async (kv, i) => {
            const _fcfbbc4e_ff98_41df_8f16_3ab5c6e74d2e = r.register(kv, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
            const _0611f09f_586c_45bc_b2e7_8197e4491f83 = r.hashv(_fcfbbc4e_ff98_41df_8f16_3ab5c6e74d2e)
            const _9c4f5edf_30ea_48de_b48e_73e96ff58820 = r.absi64(_0611f09f_586c_45bc_b2e7_8197e4491f83)
            const _4a5db257_336e_4940_9a65_a25fdfc5e2d0 = r.modi64(_9c4f5edf_30ea_48de_b48e_73e96ff58820, _40f49d41_c589_47ba_bb56_0e8afe5fecaa)
            const _077ccfdc_e8ce_4f7e_ab89_d3429c4eef9b = r.register(_92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _99c283a1_6695_46eb_9a81_a6ab60690c67)
            const _3e060bf3_7378_47f4_9298_2168549f757a = r.resfrom(_077ccfdc_e8ce_4f7e_ab89_d3429c4eef9b, _4a5db257_336e_4940_9a65_a25fdfc5e2d0)
            const _c05ea7a4_9cfb_4caa_b387_e8ccd4a93369 = r.getR(_3e060bf3_7378_47f4_9298_2168549f757a)
            r.pusharr(_c05ea7a4_9cfb_4caa_b387_e8ccd4a93369, i, _701fc425_e4e2_43c7_a4be_4f6417d54345)
          }
        const _1ea5afc8_b363_4d66_a878_6fea3162fb7c = await r.eachl(_a7bc8a59_7fda_4173_a9da_4eb968204b02, _55325a26_364f_4fdd_967f_42443bbd1318)
      }
    const _0a24c768_8db0_4631_9d74_4aee5fe03e5f = await r.condfn(_72a39f45_4015_4e9e_899e_e3c4124fafb8, _5c46f26b_5c26_48a0_bfc9_ec4a4db982b5)
    const _d3f42d96_884f_48ea_a101_e0bf8202daf5 = r.notbool(_72a39f45_4015_4e9e_899e_e3c4124fafb8)
    const _78ac36c8_a4da_414f_97a1_4f148d7282a7 = async () => {
        r.pusharr(_d111a52f_7b5b_48ba_a517_56d35cef59b4, _0dc57b4e_843f_49c4_9a36_0a12049243af, _701fc425_e4e2_43c7_a4be_4f6417d54345)
      }
    const _1792e5a6_3c43_4ef4_abba_9466619a8f7a = await r.condfn(_d3f42d96_884f_48ea_a101_e0bf8202daf5, _78ac36c8_a4da_414f_97a1_4f148d7282a7)
    const _d4eb50c5_4efe_4cf6_b82b_bc142ff7c23c = r.register(conn, _35428e1b_bea2_42dd_8631_8e2630a51d24)
    const _ee05b7ba_baeb_4586_85db_93c0d260f374 = r.newarr(_c4cf53c9_b962_4fba_b67d_9dce2922bfaa)
    r.pusharr(_ee05b7ba_baeb_4586_85db_93c0d260f374, _6feff257_7cac_496c_a9a8_4a77ad1024f7, _701fc425_e4e2_43c7_a4be_4f6417d54345)
    r.pusharr(_ee05b7ba_baeb_4586_85db_93c0d260f374, _92d51d5b_6ed1_436a_9dc2_ac783fd2ca5c, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_ee05b7ba_baeb_4586_85db_93c0d260f374, _4af2bbef_1999_47a4_8e86_29db6fa6a06f, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_ee05b7ba_baeb_4586_85db_93c0d260f374, _d4eb50c5_4efe_4cf6_b82b_bc142ff7c23c, _701fc425_e4e2_43c7_a4be_4f6417d54345)
    const _4c7081bb_a0e5_4738_8738_9860c67a4f6f = r.newarr(_889a9aa7_5db4_4062_96ea_081b52bead0d)
    r.pusharr(_4c7081bb_a0e5_4738_8738_9860c67a4f6f, _4dd37fb4_e47f_4974_bf0b_72713d23711d, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.pusharr(_4c7081bb_a0e5_4738_8738_9860c67a4f6f, _ee05b7ba_baeb_4586_85db_93c0d260f374, _6e7ea68e_4edc_4829_9207_5a2102456b1f)
    r.emit('connection', _4c7081bb_a0e5_4738_8738_9860c67a4f6f)
  })
r.on('stdout', async (out) => {
    const _2c5279d0_dc5a_4de2_b6d9_e22e89a6c9c8 = r.stdoutp(out)
  })
r.on('exit', async (status) => {
    const _a4bbf829_a908_42fd_a375_418ea2a79a9f = r.exitop(status)
  })
r.on('stderr', async (err) => {
    const _cab95ceb_d63a_46a9_aafd_19e112bb9f1a = r.stderrp(err)
  })
r.emit('_start', undefined)
