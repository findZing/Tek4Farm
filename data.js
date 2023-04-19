import cam from "./public/assets/images/cam.jpg";
import chanh_leo from "./public/assets/images/chanh_leo.jpg";
import dua_le from "./public/assets/images/dua_le.jpg";
import dua_luoi from "./public/assets/images/dua_luoi.jpg";
import man from "./public/assets/images/man.jpg";
import mit from "./public/assets/images/mit.jpg";
import nhan from "./public/assets/images/nhan.jpg";
import nho from "./public/assets/images/nho.jpg";
import sau_rieng from "./public/assets/images/sau_rieng.jpg";
import viet_quat from "./public/assets/images/viet_quat.jpg";
import roi from "./public/assets/images/roi.jpg";
import vai from "./public/assets/images/vai.jpg";

import bau from "./public/assets/images/bau.jpg";
import ca_rot from "./public/assets/images/ca_rot.jpg";
import cai_ngot from "./public/assets/images/cai_ngot.jpg";
import can_tay from "./public/assets/images/can_tay.PNG";
import cu_dau from "./public/assets/images/cu_dau.jpg";
import dua_chuot from "./public/assets/images/dua_chuot.jpg";
import muop from "./public/assets/images/muop.jpg";
import ngai_cuu from "./public/assets/images/ngai_cuu.jpg";
import ot from "./public/assets/images/ot.jpg";
import san from "./public/assets/images/san.jpg";
import su_hao from "./public/assets/images/su_hao.jpg";
import sup_lo from "./public/assets/images/sup_lo.jpg";

import cam_thao from "./public/assets/images/cam_thao.PNG";
import dinh_lang from "./public/assets/images/dinh_lang.jpg";
import hoang_ky from "./public/assets/images/hoang_ky.jpg";
import huong_thao from "./public/assets/images/huong_thao.jpg";
import gung from "./public/assets/images/ke_sua.jpg";
import nhan_sam from "./public/assets/images/nhan_sam.jpg";
import oai_huong from "./public/assets/images/oai_huong.jpg";
import que from "./public/assets/images/que.jpg";
import tam_ma from "./public/assets/images/tam_ma.jpg";
import tam_that from "./public/assets/images/tam_that.jpg";
import thao_qua from "./public/assets/images/thao_qua.jpg";
import tra_xanh from "./public/assets/images/tra_xanh.PNG";

const status_Dang_thu_hoach = "Đang thu hoạch";
const status_Co_san = "Có sẵn";

const describOption1 = 'Nông sản đạt chuẩn Viet gap'
const describOption2 = 'Nông sản là đặc sản'

export const DATA_LIST_GROUP = [
  {
    title: "Rau củ",
    content: {
      hightlight: [
        {
          image: bau,
          title: "Bầu",
          status: status_Co_san,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: ca_rot,
          title: "Cà rốt",
          status: status_Dang_thu_hoach,
          quantity: "200 tấn",
          description: describOption1,
        },
      ],
      normal: [
        {
          image: cai_ngot,
          title: "Cải ngọt",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: can_tay,
          title: "Cần tây",
          status: status_Dang_thu_hoach,
          quantity: "500 kg",
          description: describOption1,
        },
        {
          image: cu_dau,
          title: "Củ đậu",
          status: status_Dang_thu_hoach,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: dua_chuot,
          title: "Dưa chuột",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: muop,
          title: "Mướp",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: ngai_cuu,
          title: "Ngải cứu",
          status: status_Co_san,
          quantity: "500 kg",
          description: describOption1,
        },
        {
          image: ot,
          title: "Ớt",
          status: status_Co_san,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: san,
          title: "Sắn",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: su_hao,
          title: "Su hào",
          status: status_Dang_thu_hoach,
          quantity: "15 tấn",
          description: describOption1,
        },
        {
          image: sup_lo,
          title: "Súp lơ",
          status: status_Dang_thu_hoach,
          quantity: "750 kg",
          description: describOption1,
        },
      ],
    },
  },
  {
    title: "Hoa quả",
    content: {
      hightlight: [
        {
          image: cam,
          title: "Cam",
          status: status_Dang_thu_hoach,
          quantity: "500 tấn",
          description: describOption1,
        },
        {
          image: chanh_leo,
          title: "Chanh leo",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
      ],
      normal: [
        {
          image: dua_le,
          title: "Dưa lê",
          status: status_Dang_thu_hoach,
          quantity: "20 tấn",
          description: describOption1,
        },
        {
          image: dua_luoi,
          title: "Dưa lưới",
          status: status_Dang_thu_hoach,
          quantity: "500 kg",
          description: describOption1,
        },
        {
          image: man,
          title: "Mận",
          status: status_Co_san,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: mit,
          title: "Mít",
          status: status_Dang_thu_hoach,
          quantity: "5 tấn",
          description: describOption1,
        },
        {
          image: nhan,
          title: "Nhãn",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: nho,
          title: "Nho",
          status: status_Dang_thu_hoach,
          quantity: "5 tấn",
          description: describOption1,
        },
        {
          image: sau_rieng,
          title: "Sầu riêng",
          status: status_Co_san,
          quantity: "100 tấn",
          description: describOption1,
        },
        {
          image: viet_quat,
          title: "Việt quất",
          status: status_Dang_thu_hoach,
          quantity: "10 tấn",
          description: describOption1,
        },
        {
          image: roi,
          title: "Roi",
          status: status_Co_san,
          quantity: "15 tấn",
          description: describOption1,
        },
        {
          image: vai,
          title: "Vải",
          status: status_Dang_thu_hoach,
          quantity: "20 tấn",
          description: describOption1,
        },
      ],
    },
  },
  {
    title: "Thảo dược",
    content: {
      hightlight: [
        {
          image: cam_thao,
          title: "Cam thảo",
          status: status_Co_san,
          quantity: "500 kg",
          description: describOption1,
        },
        {
          image: dinh_lang,
          title: "Đinh lăng",
          status: status_Dang_thu_hoach,
          quantity: "100 kg",
          description: describOption1,
        },
      ],
      normal: [
        {
          image: hoang_ky,
          title: "Hoàng kỳ",
          status: status_Dang_thu_hoach,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: huong_thao,
          title: "Hương thảo",
          status: status_Dang_thu_hoach,
          quantity: "150 kg",
          description: describOption1,
        },
        {
          image: gung,
          title: "Gừng",
          status: status_Co_san,
          quantity: "200 kg",
          description: describOption1,
        },
        {
          image: nhan_sam,
          title: "Nhân sâm",
          status: status_Co_san,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: oai_huong,
          title: "Oải hương",
          status: status_Co_san,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: que,
          title: "Quế",
          status: status_Co_san,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: tam_ma,
          title: "Tầm ma",
          status: status_Dang_thu_hoach,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: tam_that,
          title: "Tam thất",
          status: status_Dang_thu_hoach,
          quantity: "10 kg",
          description: describOption1,
        },
        {
          image: thao_qua,
          title: "Thảo quả",
          status: status_Co_san,
          quantity: "100 kg",
          description: describOption1,
        },
        {
          image: tra_xanh,
          title: "Trà xanh",
          status: status_Co_san,
          quantity: "10 tấn",
          description: describOption1,
        },
      ],
    },
  },
];
