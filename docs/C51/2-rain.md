使用Arduino Uno R3驱动雨滴检测模块的详细说明、接线图和代码示例。

![img](https://img2023.cnblogs.com/blog/775550/202407/775550-20240705112734260-1306074251.png)

# 所需材料
- Arduino Uno R3
- 雨滴检测模块
- 面包板和连接线

# 接线步骤
1. **供电和地线连接**：
   - 将Arduino Uno的5V引脚连接到雨滴检测模块的VCC引脚。
   - 将Arduino Uno的GND引脚连接到雨滴检测模块的GND引脚。

2. **信号线连接**：
   - 将雨滴检测模块的数字信号引脚连接到Arduino Uno的数字引脚D2。

# 连接图示

```plaintext
Arduino Uno R3            雨滴检测模块
----------------          ------------
5V  ------------------->  VCC
GND ------------------->  GND
D2  ------------------->  DO (Digital Output)
```

# 示例代码
```cpp
const int rainSensorPin = 2;  // 雨滴检测模块连接到D2
int rainSensorState = 0;      // 存储雨滴检测模块的状态

void setup() {
  pinMode(rainSensorPin, INPUT);  // 设置雨滴检测模块引脚为输入
  Serial.begin(9600);             // 启动串口通信
}

void loop() {
  // 读取雨滴检测模块的状态
  rainSensorState = digitalRead(rainSensorPin);

  // 如果检测到雨滴，则输出 LOW
  if (rainSensorState == LOW) {
    Serial.println("It's raining");
  } else {
    Serial.println("doesn't rain");
  }

  delay(500);  // 延迟0.5秒
}
```

# 代码详解
1. **定义引脚**：
   - `rainSensorPin`：连接到雨滴检测模块的数字信号引脚（D2）。
   - `rainSensorState`：用于存储雨滴检测模块的当前状态。

2. **初始化**：
   - 在`setup()`函数中，设置雨滴检测模块引脚模式为输入。
   - `pinMode(rainSensorPin, INPUT)`：设置雨滴检测模块引脚为输入。
   - `Serial.begin(9600)`：启动串口通信。

3. **读取雨滴检测模块状态**：
   - 使用`digitalRead(rainSensorPin)`读取雨滴检测模块引脚的状态，并存储在`rainSensorState`中。

4. **判断并输出状态**：
   - 如果检测到雨滴，`rainSensorState`为HIGH，输出"Rain detected"。
   - 如果没有检测到雨滴，`rainSensorState`为LOW，输出"No rain"。

5. **延迟**：
   - `delay(500)`：延迟0.5秒，以便每0.5秒读取一次状态。

# 总结
以上步骤和代码示例展示了如何使用Arduino Uno R3驱动雨滴检测模块并通过串口输出雨滴检测的状态。当检测到雨滴时，串口会输出"Rain detected"，当没有检测到雨滴时，串口会输出"No rain"。