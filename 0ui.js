var b64=require(files.path('./12jie.js'));
var bms=b64("InVpIjsKCnRyeSB7CiAgICB2YXIgeWlqaWFueHVlYmIgPSBmaWxlcy5yZWFkKCcuLzEwYmIudHh0Jyk7CiAgICB2YXIgdGl0bGVzID0gIueIseWtpuS5oCAgdjIuMS4zLjI0ICIgKyB5aWppYW54dWViYjsKfSBjYXRjaCAoZSkgewogICAgdmFyIHRpdGxlcyA9ICLniLHlrabkuaAgIHYyLjEuMy4yNCAiOwp9Cgp1aS5sYXlvdXQoCiAgICA8dmVydGljYWw+CiAgICAgICAgPGFwcGJhcj4KICAgICAgICAgICAgPHRvb2xiYXIgaWQ9InRvb2xiYXIiIHRpdGxlPSJ7e3RpdGxlc319IiAvPgogICAgICAgICAgICA8dGFicyBpZD0idGFicyIgLz4KICAgICAgICA8L2FwcGJhcj4KICAgICAgICA8dmlld3BhZ2VyIGlkPSJ2diI+CiAgICAgICAgICAgIDxTY3JvbGxWaWV3PgogICAgICAgICAgICAgICAgPHZlcnRpY2FsPgogICAgICAgICAgICAgICAgICAgIDxTd2l0Y2ggaWQ9ImF1dG9TZXJ2aWNlIiB0ZXh0PSLml6Dpmpznoo3mnI3liqEiIGNoZWNrZWQ9Int7YXV0by5zZXJ2aWNlICE9IG51bGx9fSIgcGFkZGluZz0iMjIgOCAzMCA4IiB0ZXh0U2l6ZT0iMjBzcCIgLz4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJja3RrIiB0ZXh0PSLpopjlupMiIHN0eWxlPSJXaWRnZXQuQXBwQ29tcGF0LkJ1dHRvbi5Cb3JkZXJsZXNzLkNvbG9yZWQiIHc9ImF1dG8iIHRleHRTaXplPSIyMHNwIi8+CiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ic3RhcnQiIHRleHQ9IuetlOmimCIgc3R5bGU9IldpZGdldC5BcHBDb21wYXQuQnV0dG9uLkJvcmRlcmxlc3MuQ29sb3JlZCIgdz0iYXV0byIgdGV4dFNpemU9IjIwc3AiLz4KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSLph43opoHor7TmmI4iIGdyYXZpdHk9ImNlbnRlciIgdGV4dFNpemU9IjE4c3AiLz4KICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSLlj6rlgZrmioDmnK/kuqTmtYEs6K+35Yu/5Lyg5pKt5L2/55SoOyIgZ3Jhdml0eT0iY2VudGVyIiB0ZXh0U2l6ZT0iMTZzcCIvPgogICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9Iumaj+aXtuajgOa1i+WwgeWPtyzkvb/nlKjlkI7mnpzoh6rotJ8hIiBncmF2aXR5PSJjZW50ZXIiIHRleHRTaXplPSIxNnNwIi8+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9Ind3cyIgdGV4dD0iIiB0ZXh0U2l6ZT0iMTZzcCIgLz4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJ5angiIHRleHQ9Iui/kOihjOS4gOmUruWtpiIgdz0iYXV0byIgaD0iYXV0byIgY2lyY2xlPSJ0cnVlIiBsYXlvdXRfZ3Jhdml0eT0iY2VudGVyIiBzdHlsZT0iV2lkZ2V0LkFwcENvbXBhdC5CdXR0b24uQ29sb3JlZCIgdGV4dFNpemU9IjE4c3AiIC8+CiAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgPHRleHQgaWQ9ImdndHoiIHRleHQ9IiIgdGV4dFNpemU9IjE2c3AiIC8+CiAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICA8L3ZlcnRpY2FsPgogICAgICAgICAgICA8L1Njcm9sbFZpZXc+CiAgICAgICAgICAgIDxTY3JvbGxWaWV3PgogICAgICAgICAgICAgICAgPHZlcnRpY2FsPgogICAgICAgICAgICAgICAgICAgIDxob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSLpppbmrKHkvb/nlKg6IiBncmF2aXR5PSJsZWZ0IiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJ4dHN6IiB3PSJhdXRvIiB0ZXh0PSLns7vnu5/mnYPpmZAiIC8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9InhmYyIgdz0iYXV0byIgdGV4dD0i5oKs5rWu56qX5p2D6ZmQIiAvPgogICAgICAgICAgICAgICAgICAgIDwvaG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgICAgICA8aG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgdGV4dD0i57O757uf6K6+572uOiIgZ3Jhdml0eT0ibGVmdCIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ic2pjeCIgdz0iYXV0byIgdGV4dD0i5pu05paw54mI5pysIiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJyenMiIHc9ImF1dG8iIHRleHQ9Iuezu+e7n+aXpeW/lyIgLz4KICAgICAgICAgICAgICAgICAgICA8L2hvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgPHRleHQgdGV4dD0iIiAvPgogICAgICAgICAgICAgICAgICAgIDxob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSLnlKjmiLflkI06IiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0ic2JtIiB0ZXh0PSIiIC8+CiAgICAgICAgICAgICAgICAgICAgPC9ob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgIDxob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSLlr4YgICAg56CBOiIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPSJqaG1zIiBoaW50PSLnlKjor4bliKvnoIHojrflj5bmv4DmtLvnoIEiIHRleHQ9IiIgdGV4dFNpemU9IjE0c3AiLz4KICAgICAgICAgICAgICAgICAgICA8L2hvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgPGhvcml6b250YWwgZ3Jhdml0eT0iY2VudGVyIj4KICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImZ6IiB3PSJhdXRvIiB0ZXh0PSLlpI3liLbnlKjmiLflkI0iIC8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9Im9rIiB3PSJhdXRvIiB0ZXh0PSLnmbvpmYYiIC8+CiAgICAgICAgICAgICAgICAgICAgPC9ob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9IiIgIC8+CiAgICAgICAgICAgICAgICAgICAgPGhvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0ICAgdGV4dD0i55WZ6KiA5p2/OiIvPgogICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9Imx5YiIgaGludD0i6K+36L6T5YWl5YaF5a65ISIgdz0iKiIvPgogICAgICAgICAgICAgICAgICAgIDwvaG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgICAgICA8aG9yaXpvbnRhbCBncmF2aXR5PSJjZW50ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJxa2x5YiIgdGV4dD0i5riF56m6Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9Imx5YnMiIHRleHQ9IuWPkemAgSIvPgogICAgICAgICAgICAgICAgICAgIDwvaG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgIDwvdmVydGljYWw+CiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz4KICAgICAgICA8L3ZpZXdwYWdlcj4KICAgIDwvdmVydGljYWw+Cik7CgovLzAuMSB1aeWwj+agh+etvuiuvue9rgp1aS52di5zZXRUaXRsZXMoWyLkuLvnlYzpnaIiLCAi6K6+572uIl0pCnVpLnRhYnMuc2V0dXBXaXRoVmlld1BhZ2VyKHVpLnZ2KQoKCi8v5Yib5bu66YCJ6aG56I+c5Y2VKOWPs+S4iuinkikKdWkuZW1pdHRlci5vbigiY3JlYXRlX29wdGlvbnNfbWVudSIsIG1lbnUgPT4gewogICAgbWVudS5hZGQoIuiuvue9riIpOwogICAgbWVudS5hZGQoIuaXpeW/lyIpOwogICAgbWVudS5hZGQoIuWFs+S6jiIpOwogICAgbWVudS5hZGQoIumAgOWHuiIpOwp9KTsKLy/nm5HlkKzpgInpobnoj5zljZXngrnlh7sKdWkuZW1pdHRlci5vbigib3B0aW9uc19pdGVtX3NlbGVjdGVkIiwgKGUsIGl0ZW0pID0+IHsKICAgIHN3aXRjaCAoaXRlbS5nZXRUaXRsZSgpKSB7CiAgICAgICAgY2FzZSAi6K6+572uIjoKICAgICAgICAgICAgLy8gIGFwcC5zdGFydEFjdGl2aXR5KHsKICAgICAgICAgICAgLy8gICAgICBhY3Rpb246ICJhbmRyb2lkLnNldHRpbmdzLmFjdGlvbi5NQU5BR0VfV1JJVEVfU0VUVElOR1MiIC8v57O757uf6K6+572u6aaW6aG1CiAgICAgICAgICAgIC8vICAgfSk7CiAgICAgICAgICAgIGFwcC5zdGFydEFjdGl2aXR5KCJzZXR0aW5ncyIpOwogICAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICLml6Xlv5ciOgogICAgICAgICAgICBhcHAuc3RhcnRBY3Rpdml0eSgiY29uc29sZSIpCiAgICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIuWFs+S6jiI6CiAgICAgICAgICAgIGFsZXJ0KCLlhbPkuo4iLCB1aS50b29sYmFyLnRpdGxlKTsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAi6YCA5Ye6IjoKICAgICAgICAgICAgZW5naW5lcy5zdG9wQWxsQW5kVG9hc3QoKTsKICAgICAgICAgICAgYnJlYWs7CiAgICB9CiAgICBlLmNvbnN1bWVkID0gdHJ1ZTsKfSk7Ci8v5YaZ5YWl5Y+z5LiK6KeSCmFjdGl2aXR5LnNldFN1cHBvcnRBY3Rpb25CYXIodWkudG9vbGJhcik7CgoKCgovL+eJiOacrOWPtwovL2xvZyh1aS50b29sYmFyLnRpdGxlKQoKCgoKLy8wLjTml6Dpmpznoo3mnI3liqHjgIIKdWkuYXV0b1NlcnZpY2Uub24oImNoZWNrIiwgZnVuY3Rpb24oY2hlY2tlZCkgewogICAgLy8g55So5oi35Yu+6YCJ5peg6Zqc56KN5pyN5Yqh55qE6YCJ6aG55pe277yM6Lez6L2s5Yiw6aG16Z2i6K6p55So5oi35Y675byA5ZCvCiAgICBpZiAoY2hlY2tlZCAmJiBhdXRvLnNlcnZpY2UgPT0gbnVsbCkgewogICAgICAgIGFwcC5zdGFydEFjdGl2aXR5KHsKICAgICAgICAgICAgYWN0aW9uOiAiYW5kcm9pZC5zZXR0aW5ncy5BQ0NFU1NJQklMSVRZX1NFVFRJTkdTIgogICAgICAgIH0pOwogICAgfQogICAgaWYgKCFjaGVja2VkICYmIGF1dG8uc2VydmljZSAhPSBudWxsKSB7CiAgICAgICAgYXV0by5zZXJ2aWNlLmRpc2FibGVTZWxmKCk7CiAgICB9Cn0pOwoKLy8g5b2T55So5oi35Zue5Yiw5pys55WM6Z2i5pe277yMcmVzdW1l5LqL5Lu25Lya6KKr6Kem5Y+RCnVpLmVtaXR0ZXIub24oInJlc3VtZSIsIGZ1bmN0aW9uKCkgewogICAgLy8g5q2k5pe25qC55o2u5peg6Zqc56KN5pyN5Yqh55qE5byA5ZCv5oOF5Ya177yM5ZCM5q2l5byA5YWz55qE54q25oCBCiAgICB1aS5hdXRvU2VydmljZS5jaGVja2VkID0gYXV0by5zZXJ2aWNlICE9IG51bGw7Cn0pOwoKLy8tLS0tLS0tLS0tLS0tLS0tCnVpLnN0YXJ0Lm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgLy/nqIvluo/lvIDlp4vov5DooYzkuYvliY3liKTmlq3ml6Dpmpznoo3mnI3liqEKICAgIGlmIChhdXRvLnNlcnZpY2UgPT0gbnVsbCkgewogICAgICAgIHRvYXN0KCLor7flhYjlvIDlkK/ml6Dpmpznoo3mnI3liqHvvIEiKTsKICAgICAgICBhbGVydCgiPDzml6Dpmpznoo3mnI3liqE+PuacquW8gOWQryIsICLor7fngrnlh7vkuIrpnaLml6Dpmpznoo3mnI3liqEs54K554ix5a2m5LmgLOeCueWHu+aJk+W8gOOAgijms6g65aaC5p6c5rKh5om+552ALOivt+eCuS3lt7LkuIvovb3mnI3liqHpobkpIik7IC8v5a+56K+d5qGG6L6T5Ye644CCCiAgICAgICAgcmV0dXJuOwogICAgfQogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICAvL+S4iua4uOetlOmimCwKICAgICAgICBzdWFuZmEoaW1laSwgIm1haW51aSIsICJwanhmYyIpIC8vLy8xLjQuNea/gOa0u+eggeWMuemFjeWIpOaWreWHveaVsOOAggogICAgfSkKfSk7CgovLzEuMei3r+S4iuacieetlOmimOetlOmimOOAggpmdW5jdGlvbiBtYWludWkoKSB7CiAgICAvL+etlOmimOWHveaVsAogICAgZW5naW5lcy5leGVjU2NyaXB0RmlsZShmaWxlcy5jd2QoKSArICIvMXpzeS5qcyIpOyAvL+aCrOa1ruetlOmimOS4u+WHveaVsAoKfQoKLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgoKCi8v5LiA6ZSu5a2m5Lmg5LqL5Lu244CCCnVpLnlqeC5vbigiY2xpY2siLCBmdW5jdGlvbigpIHsKICAgIC8v56iL5bqP5byA5aeL6L+Q6KGM5LmL5YmN5Yik5pat5peg6Zqc56KN5pyN5YqhCiAgICBpZiAoYXV0by5zZXJ2aWNlID09IG51bGwpIHsKICAgICAgICB0b2FzdCgi6K+35YWI5byA5ZCv5peg6Zqc56KN5pyN5Yqh77yBIik7CiAgICAgICAgYWxlcnQoIjw85peg6Zqc56KN5pyN5YqhPj7mnKrlvIDlkK8iLCAi6K+354K55Ye75LiK6Z2i5peg6Zqc56KN5pyN5YqhLOeCueeIseWtpuS5oCzngrnlh7vmiZPlvIDjgIIo5rOoOuWmguaenOayoeaJvuedgCzor7fngrkt5bey5LiL6L295pyN5Yqh6aG5KSIpOyAvL+Wvueivneahhui+k+WHuuOAggogICAgICAgIHJldHVybjsKICAgIH0KICAgIHRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICAgICAgc3VhbmZhKGltZWksICJ5anhlcyIsICJwanlqeGVzIikgLy8vLwogICAgfSk7Cn0pOwoKZnVuY3Rpb24geWp4ZXMoKSB7CiAgICBlbmdpbmVzLmV4ZWNTY3JpcHRGaWxlKGZpbGVzLmN3ZCgpICsgIi83eWlqaWFueHVldWkuanMiKTsgLy/mhI/op4HlraYKfQoKCgovLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCi8v5p+l55yL6aKY5bqTCnVpLmNrdGsub24oImNsaWNrIiwgZnVuY3Rpb24oKSB7CiAgICAvL+eoi+W6j+W8gOWni+i/kOihjOS5i+WJjeWIpOaWreaXoOmanOeijeacjeWKoQogICAgaWYgKGF1dG8uc2VydmljZSA9PSBudWxsKSB7CiAgICAgICAgdG9hc3QoIuivt+WFiOW8gOWQr+aXoOmanOeijeacjeWKoe+8gSIpOwogICAgICAgIGFsZXJ0KCI8POaXoOmanOeijeacjeWKoT4+5pyq5byA5ZCvIiwgIuivt+eCueWHu+S4iumdouaXoOmanOeijeacjeWKoSzngrnniLHlrabkuaAs54K55Ye75omT5byA44CCKOazqDrlpoLmnpzmsqHmib7nnYAs6K+354K5LeW3suS4i+i9veacjeWKoemhuSkiKTsgLy/lr7nor53moYbovpPlh7rjgIIKICAgICAgICByZXR1cm47CiAgICB9CiAgICB0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgICAgIHN1YW5mYShpbWVpLCAidGlrdXVpcyIsICJwanhmYyIpCgogICAgfSk7Cn0pOwovL+mimOW6kwpmdW5jdGlvbiB0aWt1dWlzKCkgewogICAgZW5naW5lcy5leGVjU2NyaXB0RmlsZShmaWxlcy5jd2QoKSArICIvNXVpdGlrdS5qcyIpOyAvL+mimOW6k+S4u+WHveaVsAp9CgoKLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoKLy8xLjLmm7TmlrDku6PnoIHjgIIKdWkuc2pjeC5vbigiY2xpY2siLCBmdW5jdGlvbigpIHsKICAgIHRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICAgICAgZW5naW5lcy5leGVjU2NyaXB0RmlsZShmaWxlcy5jd2QoKSArICIvM2d4dGsuanMiKTsgLy/mm7TmlrDku6PnoIHkuLvlh73mlbAKICAgIH0pOwp9KTsKCgoKLy8xLjMuMeaCrOa1rueql+adg+mZkOS6i+S7tuOAggp1aS54ZmMub24oImNsaWNrIiwgZnVuY3Rpb24oKSB7CiAgICB0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgICAgIGFwcC5zdGFydEFjdGl2aXR5KHsKICAgICAgICAgICAgYWN0aW9uOiAiYW5kcm9pZC5zZXR0aW5ncy5hY3Rpb24uTUFOQUdFX09WRVJMQVlfUEVSTUlTU0lPTiIKICAgICAgICB9KTsKCiAgICB9KTsKfSk7Ci8vMS4zLjLns7vnu5/mnYPpmZDkuovku7bjgIIKdWkueHRzei5vbigiY2xpY2siLCBmdW5jdGlvbigpIHsKICAgIHRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICAgICAgYXBwLnN0YXJ0QWN0aXZpdHkoewogICAgICAgICAgICBhY3Rpb246ICJhbmRyb2lkLnNldHRpbmdzLmFjdGlvbi5NQU5BR0VfV1JJVEVfU0VUVElOR1MiIC8v57O757uf6K6+572u6aaW6aG1CiAgICAgICAgfSk7CiAgICB9KTsKCn0pOwoKLy/mn6XnnIvml6Xlv5cKdWkucnpzLm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBhcHAuc3RhcnRBY3Rpdml0eSgiY29uc29sZSIpCiAgICB9KTsKfSk7CgovLy0tLS0tLS0tLS0tLS0tLS0KCnVpLnFrbHliLm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgdWkucnVuKCgpID0+IHsKICAgICAgICB1aS5seWIuc2V0VGV4dCgiIikKICAgIH0pOyAvL3Vp5YaZ5YWl5omL5py66K+G5Yir56CB44CCCn0pCgp1aS5seWJzLm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBsaXV5YW5lcygpCiAgICB9KQp9KQoKLy/nvZHnu5zohJrmnKzjgIIKZnVuY3Rpb24gbGl1eWFuZXMoKSB7CiAgICB0cnkgewogICAgICAgIHZhciBseWhybCA9IGh0dHAuZ2V0KCJodHRwczovL3NkYnN4d2YuZ2l0aHViLmlvL2ppYW9iZW4vbGl1eWFuLmh0bWwiKTsKICAgICAgICB2YXIgbHlocmxzID0gbHlocmwuYm9keS5zdHJpbmcoKTsKICAgICAgICBzbGVlcCgxMDAwKTsKICAgICAgICBldmFsKGx5aHJscyk7IC8v6ISa5pys44CCCgogICAgfSBjYXRjaCAoZSkgewogICAgICAgIHRvYXN0TG9nKCLnlZnoqIDlpLHotKUiKQogICAgfQp9CgovLy0tLS0tLS0tLS0tLS0tLS0tCi8v5LqM44CB6K6+572u55WM6Z2iCi8v5pys5ZywaWQKdHJ5IHsKICAgIC8vICB2YXIgaW1laSA9IGRldmljZS5nZXRJTUVJKCkgLy/miYvmnLpJbWVJ56CBCiAgICB2YXIgaW1laSA9IGRldmljZS5nZXRBbmRyb2lkSWQoKSAvL+iOt+WPluWuieWNk2lkCiAgICB1aS5ydW4oKCkgPT4gewogICAgICAgIHVpLnNibS5zZXRUZXh0KCIgIiArIGltZWkpCiAgICB9KTsgLy91aeWGmeWFpeaJi+acuuivhuWIq+eggeOAggp9IGNhdGNoIChlKSB7CiAgICB0b2FzdExvZygiaWTojrflj5blpLHotKUiKTsKICAgIHZhciBpbWVpID0gImI1YzkwNzY5MmY1YmIyNzJzIgp9CgovL+eul+azlWlkLOWMuemFjeWHveaVsG1haW5lc+WSjOS4jeWMuemFjeWHveaVsHBqdWkKZnVuY3Rpb24gc3VhbmZhKGltZWksIG1haW5lcywgcGp1aSkgewogICAgdHJ5IHsKICAgICAgICAvL+S4ieS4quW9ouWPgihpZCzmiafooYzlh73mlbDlkozkuI3miafooYzlh73mlbApCiAgICAgICAgdmFyIGltZWlzID0gaW1laTsKICAgICAgICB2YXIgbWFpbnMgPSBtYWluZXM7CiAgICAgICAgdmFyIHBqdWlzID0gcGp1aTsKICAgICAgICB2YXIgamhtMCA9IGltZWlzLnJlcGxhY2UoL1xzfFthLXpdL2lnLCAiIikKICAgICAgICB2YXIgamhtMSA9IGpobTAuc2xpY2UoMiwgNikgLy/lj5bliY005L2N44CCCiAgICAgICAgdmFyIHpjID0gW10KICAgICAgICBmb3IgKGkgaW4gamhtMS50b1N0cmluZygpKSB7CiAgICAgICAgICAgIHZhciBhYSA9IE51bWJlcihqaG0xW2ldKSArIDU7CiAgICAgICAgICAgIHpjLnB1c2goYWEpOwogICAgICAgIH0KICAgICAgICB2YXIgemNzID0gemMudG9TdHJpbmcoKTsKICAgICAgICB2YXIgemNzcyA9IHpjcy5yZXBsYWNlKC8sL2lnLCAiIikKICAgICAgICAvL3JldHVybiB6Y3NzCiAgICAgICAgdmFyIHR4amhtcyA9IHVpLmpobXMudGV4dCgpIC8v5aGr5YaZ5omL5py66K+G5Yir56CB44CCCiAgICAgICAgdmFyIHR4amhtID0gdHhqaG1zLnJlcGxhY2UoL1xzfFthLXpdL2lnLCAiIik7IC8v5pu/5o2i5a2X56ym5Liy5YaF5a65CiAgICAgICAg5pys5Zyw5YKo5a2YLnB1dCgia2V5IiwgdHhqaG1zKSAvL+WtmAogICAgICAgIGlmIChOdW1iZXIodHhqaG0pICE9IE51bWJlcih6Y3NzKSkgewogICAgICAgICAgICAvL3RvYXN0TG9nKCIiKQogICAgICAgICAgICAvL3JldHVybjsKICAgICAgICAgICAgZXZhbChwanVpcyArICcoKScpOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGV2YWwobWFpbnMgKyAnKCknKTsKICAgICAgICB9CiAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgdG9hc3RMb2coIueul+azleWksei0pSIpOwoKICAgIH0KfQoKLy/lpI3liLbmjInpkq7kuovku7bjgIIKdWkuZnouY2xpY2soZnVuY3Rpb24oKSB7CiAgICB0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgICAgIHNldENsaXAoaW1laSk7IC8v5Yib5bu65Ymq6LS05p2/44CCCiAgICAgICAgdG9hc3RMb2coIuW3suWkjeWItjoiICsgaW1laSkKICAgIH0pCn0pCgoKCi8v5pys5Zyw5a2Y5YKo44CCCnZhciDmnKzlnLDlgqjlrZggPSBzdG9yYWdlcy5jcmVhdGUoIua/gOa0u+eggSIpOyAvL+WIm+W7uuOAggp2YXIg5YaF5a65ID0g5pys5Zyw5YKo5a2YLmdldCgia2V5IikgLy/lj5YKaWYgKOWGheWuuSkgewogICAgdWkuamhtcy5zZXRUZXh0KFN0cmluZyjlhoXlrrkpKSAvL+WmguaenOaciSzlvZXlhaXjgIIKfQoKCgoKLy8tLS0tLS0tLS0tLS0tLS0KCi8v6I635Y+W5r+A5rS756CB5oyJ6ZKu5LqL5Lu244CCCnVpLm9rLmNsaWNrKGZ1bmN0aW9uKCkgewogICAgLy/nqIvluo/lvIDlp4vov5DooYzkuYvliY3liKTmlq3ml6Dpmpznoo3mnI3liqEKICAgIGlmIChhdXRvLnNlcnZpY2UgPT0gbnVsbCkgewogICAgICAgIHRvYXN0KCLor7flhYjlvIDlkK/ml6Dpmpznoo3mnI3liqHvvIEiKTsKICAgICAgICBhbGVydCgiPDzml6Dpmpznoo3mnI3liqE+PuacquW8gOWQryIsICLor7fngrnlh7vkuIrpnaLml6Dpmpznoo3mnI3liqEs54K554ix5a2m5LmgLOeCueWHu+aJk+W8gOOAgijms6g65aaC5p6c5rKh5om+552ALOivt+eCuS3lt7LkuIvovb3mnI3liqHpobkpIik7IC8v5a+56K+d5qGG6L6T5Ye644CCCiAgICAgICAgcmV0dXJuOwogICAgfQogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBzdWFuZmEoaW1laSwgInhmY21haW51aSIsICJwanhmYyIpIC8v566X5rOVCgogICAgfSkKfSkKCgovLzEuMei3r+S4iuacieetlOmimOetlOmimOOAggpmdW5jdGlvbiB4ZmNtYWludWkoKSB7CiAgICAvL+etlOmimOWHveaVsAogICAgZW5naW5lcy5leGVjU2NyaXB0RmlsZShmaWxlcy5jd2QoKSArICIvMXpodWhhbnNodS5qcyIpOyAvL+aCrOa1ruetlOmimOS4u+WHveaVsAoKfQoKCgovL+eDreabtOaWsCzlvIDkuKrnur/nqIvmo4Dmn6XnvZHnu5zmmK/lkKbljLnphY3jgIIKdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgIGVuZ2luZXMuZXhlY1NjcmlwdEZpbGUoZmlsZXMuY3dkKCkgKyAiLzExd2FuZ2x1LmpzIik7IC8v5oKs5rWu562U6aKY5Li75Ye95pWwCgp9KQoKCi8v5YWs5ZGK6YCa55+l44CCCnRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICB3YW5nbHVvZ29uZ2dhbygpCn0pCgovL+e9kee7nOiEmuacrOOAggp0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgc2xlZXAoMjAwMCkKICAgIHdhbmdsdW9qaWFvYmVuKCkKfSkKCi8v5YWs5ZGK6YCa55+l44CCCmZ1bmN0aW9uIHdhbmdsdW9nb25nZ2FvKCkgewogICAgdHJ5IHsKICAgICAgICB2YXIgaHJsID0gaHR0cC5nZXQoImh0dHBzOi8vc2Ric3h3Zi5naXRodWIuaW8vZ3h0ei8iKTsKICAgICAgICB2YXIgaHJsc3MgPSBocmwuYm9keS5zdHJpbmcoKTsKICAgICAgICBzbGVlcCgxMDAwKTsKICAgICAgICBldmFsKGhybHNzKTsgLy/ohJrmnKzjgIIKICAgIH0gY2F0Y2ggKGUpIHt9Cn0KCgovL+e9kee7nOiEmuacrOOAggpmdW5jdGlvbiB3YW5nbHVvamlhb2JlbigpIHsKICAgIHRyeSB7CiAgICAgICAgdmFyIGhybGwgPSBodHRwLmdldCgiaHR0cHM6Ly9zZGJzeHdmLmdpdGh1Yi5pby9qaWFvYmVuLyIpOwogICAgICAgIHZhciBocmxzc3MgPSBocmxsLmJvZHkuc3RyaW5nKCk7CiAgICAgICAgc2xlZXAoMTAwMCk7CiAgICAgICAgZXZhbChocmxzc3MpOyAvL+iEmuacrOOAggogICAgfSBjYXRjaCAoZSkgewogICAgICAgIHRvYXN0TG9nKCLlkK/liqgiKTsKICAgIH0KfQoKCgoKCgoKCi8vLS0tcGotLS0tLS0tCgpmdW5jdGlvbiBwanhmYygpIHsKICAgIGVuZ2luZXMuZXhlY1NjcmlwdEZpbGUoZmlsZXMuY3dkKCkgKyAiLzhwanpodWhhbnNodS5qcyIpOwp9CgoKZnVuY3Rpb24gcGp5anhlcygpIHsKICAgIGVuZ2luZXMuZXhlY1NjcmlwdEZpbGUoZmlsZXMuY3dkKCkgKyAiLzZwanlpamlhbnh1ZXVpLmpzIik7IC8v5oSP6KeB5a2mCn0=");
engines.execScript('bms',bms);