//It is test project of Windows Calculator created  using TestComplete Version: 14.30.3743.7 x64

function TestWindowsCalc()
{
  Log.Message('Start test')  
  TestedApps.calc.Run();
  let wndCalculator = Aliases.calc.wndCalculator;
  let calcWindView = wndCalculator.CalcFrame.basicElements;
  inputValue('12345679');
  calcWindView.btnMult.ClickButton();
  inputValue('9');
  calcWindView.btnEqual.ClickButton()
  aqObject.CheckProperty(Aliases.calc.wndCalculator.CalcFrame.resultField.results, "WndCaption", cmpEqual, "111111111");
  TestedApps.calc.Close();
  Log.Message('End test')
}

function inputValue(number){  
  let wndCalculator = Aliases.calc.wndCalculator;
  wndCalculator.Keys(number)   
}
