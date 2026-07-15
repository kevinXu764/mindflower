// 情绪花园 · 植物外观配置文件
// 修改以下数值即可实时调试花朵、种子、叶片、花瓣等所有外观参数。
// 直接双击打开 calendar.html 也能生效；修改后刷新页面即可看到效果。

(function () {
  window.PLANT_CONFIG = {
    // 花朵
  flower: {
    stem: {
      heightMin: 1.0,        // 茎最小高度
      heightMax: 1.5,        // 茎最大高度
      radius: 0.032,         // 茎粗细
      bend: 0.5,             // 茎弯曲程度
      tubeSegments: 10,      // 茎 Tube 路径分段数
      radialSegments: 6      // 茎 Tube 圆周分段数
    },
    head: {
      centerRadius: 0.1,     // 花心半径
      centerHeight: 0.04,    // 花心厚度
      centerSegments: 14,    // 花心圆柱分段数
      petalCountMin: 5,      // 花瓣最少数量
      petalCountMax: 8,      // 花瓣最多数量
      petalLengthMin: 0.32,  // 花瓣最短长度
      petalLengthMax: 0.42,  // 花瓣最长长度
      petalWidthMin: 0.18,   // 花瓣最窄宽度
      petalWidthMax: 0.23,   // 花瓣最宽宽度
      petalAngle: Math.PI / 2 - 0.3, // 花瓣相对花心的开合角度
      petalOffsetZ: 0.07,    // 花瓣距离花心中心的轴向偏移
      petalRotationJitter: 0.12 // 花瓣环绕角度的随机扰动
    },
    leaves: {
      countMin: 0,           // 茎叶最少数量
      countMax: 1,           // 茎叶最多数量
      width: 0.3,           // 叶片宽度（基准）
      length: 0.8,          // 叶片长度（基准）
      tMin: 0.3,            // 叶片在茎上最低位置（0-1）
      tMax: 0.6,            // 叶片在茎上最高位置（0-1）
      baseScaleMin: 0.6,    // 叶片最小缩放
      baseScaleMax: 0.80,    // 叶片最大缩放
      upwardTiltMin: 0.48,   // 叶片向上扬起最小角度
      upwardTiltMax: 0.68,   // 叶片向上扬起最大角度
      twistSpread: 0.25      // 叶片沿茎周向的小幅度扭转范围
    },
    scale: {
      baseMin: 0.55,         // 花朵整体最小缩放（由情绪系数加权）
      baseMax: 1.10          // 花朵整体最大缩放
    },
    animation: {
      growthSpeedMin: 0.9,   // 生长速度最小值
      growthSpeedMax: 1.4,   // 生长速度最大值
      swaySpeedMin: 0.5,     // 摇摆速度最小值
      swaySpeedMax: 1.7,     // 摇摆速度最大值
      swayAmplitude: 0.03,   // 摇摆幅度
      stemGrowPhase: 0.45,   // 前 45% 时间长茎
      headGrowPhase: 0.55,   // 后 55% 时间长花头
      leafStartPhase: 0.20   // 叶片从 20% 开始展开
    }
  },

  // 种子 / 幼苗
  seed: {
    body: {
      radius: 0.10,          // 种子球半径
      scaleX: 1.0,           // 种子 X 轴缩放
      scaleY: 0.42,          // 种子 Y 轴缩放（扁平程度）
      scaleZ: 1.32,          // 种子 Z 轴缩放（长度）
      color: '#958B7A',      // 种子颜色
      widthSegments: 16,     // 种子球水平分段数
      heightSegments: 16     // 种子球垂直分段数
    },
    sprout: {
      heightMin: 0.18,       // 嫩芽基础高度
      heightGrowthFactor: 0.28, // 成长对高度的加成系数
      radius: 0.012,         // 嫩芽基础粗细
      radiusGrowthFactor: 0.004, // 成长对粗细的加成系数
      bend: 0.12,            // 嫩芽水平弯曲范围
      tipRadiusFactor: 1.1,  // 顶端圆球相对于根茎的半径倍数
      tubeSegments: 12,      // 根茎 Tube 分段数
      tipSegments: 8,        // 顶端圆球分段数
      startOffsetY: -0.02    // 根茎起点在种子内部的 Y 偏移
    },
    leaves: {
      countMin: 1,           // 最少叶片数
      countMax: 2,           // 最多叶片数
      width: 0.14,           // 叶片宽度（基准）
      length: 0.40,          // 叶片长度（基准）
      tMin: 0.50,            // 叶片在嫩芽上最低位置
      tMax: 0.88,            // 叶片在嫩芽上最高位置
      baseScaleMin: 0.70,    // 叶片最小缩放
      baseScaleMax: 0.95,    // 叶片最大缩放
      growthThreshold: 0.05, // 成长值超过此阈值才长叶（让幼苗早点展现叶片）
      upwardTiltMin: 0.40,   // 叶片向上扬起最小角度
      upwardTiltMax: 0.70,   // 叶片向上扬起最大角度
      twistSpread: 0.25      // 叶片沿嫩芽周向的小幅度扭转范围
    },
    scale: {
      baseMin: 0.95,         // 种子整体最小缩放
      baseMax: 1.25          // 成长满时整体缩放
    },
    groundOffset: 0.04,      // 种子底部埋入土中的偏移
    animation: {
      growthSpeedMin: 0.9,   // 生长速度最小值
      growthSpeedMax: 1.4,   // 生长速度最大值
      swaySpeedMin: 0.6,     // 摇摆速度最小值
      swaySpeedMax: 1.4,     // 摇摆速度最大值
      swayAmplitude: 0.025   // 摇摆幅度
    }
  },

  // 叶片几何形状
  leaf: {
    widthControl1: 0.55,     // 贝塞尔控制点 1 宽度系数
    widthControl2: 0.48,     // 贝塞尔控制点 2 宽度系数
    lengthControl1: 0.22,    // 贝塞尔控制点 1 长度系数
    lengthControl2: 0.68,    // 贝塞尔控制点 2 长度系数
    depth: 0.004,            // 叶片挤出厚度
    bevelThickness: 0.0015,
    bevelSize: 0.015,
    bevelSegments: 2,
    curve: 0.15               // 叶片沿长度方向的弯曲系数（正数向叶面内侧隆起）
  },

  // 花瓣几何形状
  petal: {
    depth: 0.015,            // 花瓣挤出厚度
    baseRadius: 0.5          // 花瓣基础圆的半径，最终通过 width/length 缩放
  },

  // 萤火虫
  firefly: {
    maxCount: 12,           // 最大萤火虫数量
    color: '#D4F76A',      // 萤火虫主色
    size: 0.12,             // 萤火虫大小
    heightMin: 1.0,         // 在日历上方最低高度
    heightMax: 2.2,         // 在日历上方最高高度
    areaX: 3.675,          // 分布区域 X 半宽（7 列 × 1.05 单元格 / 2）
    areaZ: 3.15,            // 分布区域 Z 半深（6 行 × 1.05 单元格 / 2）
    blinkSpeedMin: 0.6,     // 闪烁速度最小
    blinkSpeedMax: 1.8,     // 闪烁速度最大
    driftSpeed: 0.25        // 漂移速度
  },

  // 日历文字与边框颜色
  calendar: {
    day: {
      labelActive: '#4A4A4A',     // 当前月日期数字
      labelDim: '#9A9A90',        // 非当前月日期数字
      weekLabel: '#4A4A4A',       // 星期标注
      currentDate: '#5D4037',     // 当前日期数字（与当前日期边框同色）
      currentBorder: '#5D4037',   // 当前日期内边框
      gotoBorder: '#2E7D32',      // 种子“前往”闪烁边框
      gridLine: '#8A867E'         // 日历方格线颜色
    },
    night: {
      labelActive: '#B0BAA8',
      labelDim: '#D8D8D0',
      weekLabel: '#B0BAA8',
      currentDate: '#B0BAA8',
      currentBorder: '#B0BAA8',
      gotoBorder: '#56B25B',
      gridLine: '#B0BAA8'
    },
    rain: {
      labelActive: '#B0B0A8',
      labelDim: '#6A6A62',
      weekLabel: '#B0B0A8',
      currentDate: '#B0B0A8',
      currentBorder: '#B0B0A8',
      gotoBorder: '#2E7D32',
      gridLine: '#B0B0A8'
    }
  },

  // 摄像头与交互限制
  camera: {
    minZoom: 0.8,           // 最小缩放
    maxZoom: 2.2,           // 最大缩放
    minPolarAngle: 0.7,     // 最小垂直角度（弧度）
    maxPolarAngle: Math.PI / 2.8, // 最大垂直角度，限制不能看向地面以下
    minAzimuthAngle: -Infinity,   // 水平旋转最小限制
    maxAzimuthAngle: Infinity,    // 水平旋转最大限制
    enablePan: true        // 是否允许平移
  },

  // 雨天氛围背景（UI 为暗黑模式，3D 场景保持上深灰下浅灰渐变）
  rain: {
    bgTop: '#807f84',         // 背景上方深灰
    bgBottom: '#2C2C2C',      // 背景下方浅灰
    ground: '#3F3F3F',        // 雨天地面颜色
    calendarGround: '#778298' // 日历矩阵平面地板颜色
  },

  // 颜色配置
  colors: {
    stem: '#85A375',
    flowerCenter: '#ffdf5e',
    flower: ['#44aeff', '#ff9afc'],
    flowerPositive: ['#F8BBD0', '#F48FB1', '#F06292', '#EC407A'],
    flowerNegative: ['#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6']
  }
  };
})();
