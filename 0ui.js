var b64=require(files.path('./12jie.js'));
var bms=b64("InVpIjsKCnRyeSB7CiAgICB2YXIgeWlqaWFueHVlYmIgPSBmaWxlcy5yZWFkKCcuLzEwYmIudHh0Jyk7CiAgICB2YXIgdGl0bGVzID0gIueIseWtpuS5oCAgdjIuMS4xLjYxMCAiICsgeWlqaWFueHVlYmI7Cn0gY2F0Y2ggKGUpIHsKICAgIHZhciB0aXRsZXMgPSAi54ix5a2m5LmgICB2Mi4xLjEuNjEwICI7Cn0KCnVpLmxheW91dCgKICAgIDx2ZXJ0aWNhbD4KICAgICAgICA8YXBwYmFyPgogICAgICAgICAgICA8dG9vbGJhciBpZD0idG9vbGJhciIgdGl0bGU9Int7dGl0bGVzfX0iIC8+CiAgICAgICAgICAgIDx0YWJzIGlkPSJ0YWJzIiAvPgogICAgICAgIDwvYXBwYmFyPgogICAgICAgIDx2aWV3cGFnZXIgaWQ9InZ2Ij4KICAgICAgICAgICAgPFNjcm9sbFZpZXc+CiAgICAgICAgICAgICAgICA8dmVydGljYWw+CiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaCBpZD0iYXV0b1NlcnZpY2UiIHRleHQ9IuaXoOmanOeijeacjeWKoSIgY2hlY2tlZD0ie3thdXRvLnNlcnZpY2UgIT0gbnVsbH19IiBwYWRkaW5nPSIyMiA4IDMwIDgiIHRleHRTaXplPSIyMHNwIiAvPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9ImNrdGsiIHRleHQ9IumimOW6kyIgc3R5bGU9IldpZGdldC5BcHBDb21wYXQuQnV0dG9uLkJvcmRlcmxlc3MuQ29sb3JlZCIgdz0iYXV0byIgdGV4dFNpemU9IjIwc3AiLz4KICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJzdGFydCIgdGV4dD0i562U6aKYIiBzdHlsZT0iV2lkZ2V0LkFwcENvbXBhdC5CdXR0b24uQm9yZGVybGVzcy5Db2xvcmVkIiB3PSJhdXRvIiB0ZXh0U2l6ZT0iMjBzcCIvPgogICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9IumHjeimgeivtOaYjiIgZ3Jhdml0eT0iY2VudGVyIiB0ZXh0U2l6ZT0iMThzcCIvPgogICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9IuWPquWBmuaKgOacr+S6pOa1gSzor7fli7/kvKDmkq3kvb/nlKg7IiBncmF2aXR5PSJjZW50ZXIiIHRleHRTaXplPSIxNnNwIi8+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgdGV4dD0i6ZqP5pe25qOA5rWL5bCB5Y+3LOS9v+eUqOWQjuaenOiHqui0nyEiIGdyYXZpdHk9ImNlbnRlciIgdGV4dFNpemU9IjE2c3AiLz4KICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0id3dzIiB0ZXh0PSIiIHRleHRTaXplPSIxNnNwIiAvPgogICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9InlqeCIgdGV4dD0i6L+Q6KGM5LiA6ZSu5a2mIiB3PSJhdXRvIiBoPSJhdXRvIiBjaXJjbGU9InRydWUiIGxheW91dF9ncmF2aXR5PSJjZW50ZXIiIHN0eWxlPSJXaWRnZXQuQXBwQ29tcGF0LkJ1dHRvbi5Db2xvcmVkIiB0ZXh0U2l6ZT0iMThzcCIgLz4KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA8dGV4dCBpZD0iZ2d0eiIgdGV4dD0iIiB0ZXh0U2l6ZT0iMTZzcCIgLz4KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIDwvdmVydGljYWw+CiAgICAgICAgICAgIDwvU2Nyb2xsVmlldz4KICAgICAgICAgICAgPFNjcm9sbFZpZXc+CiAgICAgICAgICAgICAgICA8dmVydGljYWw+CiAgICAgICAgICAgICAgICAgICAgPGhvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9IummluasoeS9v+eUqDoiIGdyYXZpdHk9ImxlZnQiIC8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9Inh0c3oiIHc9ImF1dG8iIHRleHQ9Iuezu+e7n+adg+mZkCIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ieGZjIiB3PSJhdXRvIiB0ZXh0PSLmgqzmta7nqpfmnYPpmZAiIC8+CiAgICAgICAgICAgICAgICAgICAgPC9ob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgIDxob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSLns7vnu5/orr7nva46IiBncmF2aXR5PSJsZWZ0IiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPSJzamN4IiB3PSJhdXRvIiB0ZXh0PSLmm7TmlrDniYjmnKwiIC8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9InJ6cyIgdz0iYXV0byIgdGV4dD0i57O757uf5pel5b+XIiAvPgogICAgICAgICAgICAgICAgICAgIDwvaG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICA8dGV4dCB0ZXh0PSIiIC8+CiAgICAgICAgICAgICAgICAgICAgPGhvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9IueUqOaIt+WQjToiIC8+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGlkPSJzYm0iIHRleHQ9IiIgLz4KICAgICAgICAgICAgICAgICAgICA8L2hvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgPGhvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IHRleHQ9IuWvhiAgICDnoIE6IiAvPgogICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgaWQ9ImpobXMiIGhpbnQ9IueUqOivhuWIq+eggeiOt+WPlua/gOa0u+eggSIgdGV4dD0iIiB0ZXh0U2l6ZT0iMTRzcCIvPgogICAgICAgICAgICAgICAgICAgIDwvaG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgICAgICA8aG9yaXpvbnRhbCBncmF2aXR5PSJjZW50ZXIiPgogICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0iZnoiIHc9ImF1dG8iIHRleHQ9IuWkjeWItueUqOaIt+WQjSIgLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ib2siIHc9ImF1dG8iIHRleHQ9IueZu+mZhiIgLz4KICAgICAgICAgICAgICAgICAgICA8L2hvcml6b250YWw+CiAgICAgICAgICAgICAgICAgICAgPHRleHQgdGV4dD0iIiAgLz4KICAgICAgICAgICAgICAgICAgICA8aG9yaXpvbnRhbD4KICAgICAgICAgICAgICAgICAgICAgICAgPHRleHQgICB0ZXh0PSLnlZnoqIDmnb86Ii8+CiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD0ibHliIiBoaW50PSLor7fovpPlhaXlhoXlrrkhIiB3PSIqIi8+CiAgICAgICAgICAgICAgICAgICAgPC9ob3Jpem9udGFsPgogICAgICAgICAgICAgICAgICAgIDxob3Jpem9udGFsIGdyYXZpdHk9ImNlbnRlciI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9InFrbHliIiB0ZXh0PSLmuIXnqboiLz4KICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD0ibHlicyIgdGV4dD0i5Y+R6YCBIi8+CiAgICAgICAgICAgICAgICAgICAgPC9ob3Jpem9udGFsPgogICAgICAgICAgICAgICAgPC92ZXJ0aWNhbD4KICAgICAgICAgICAgPC9TY3JvbGxWaWV3PgogICAgICAgIDwvdmlld3BhZ2VyPgogICAgPC92ZXJ0aWNhbD4KKTsKCi8vMC4xIHVp5bCP5qCH562+6K6+572uCnVpLnZ2LnNldFRpdGxlcyhbIuS4u+eVjOmdoiIsICLorr7nva4iXSkKdWkudGFicy5zZXR1cFdpdGhWaWV3UGFnZXIodWkudnYpCgoKLy/liJvlu7rpgInpobnoj5zljZUo5Y+z5LiK6KeSKQp1aS5lbWl0dGVyLm9uKCJjcmVhdGVfb3B0aW9uc19tZW51IiwgbWVudSA9PiB7CiAgICBtZW51LmFkZCgi6K6+572uIik7CiAgICBtZW51LmFkZCgi5pel5b+XIik7CiAgICBtZW51LmFkZCgi5YWz5LqOIik7CiAgICBtZW51LmFkZCgi6YCA5Ye6Iik7Cn0pOwovL+ebkeWQrOmAiemhueiPnOWNleeCueWHuwp1aS5lbWl0dGVyLm9uKCJvcHRpb25zX2l0ZW1fc2VsZWN0ZWQiLCAoZSwgaXRlbSkgPT4gewogICAgc3dpdGNoIChpdGVtLmdldFRpdGxlKCkpIHsKICAgICAgICBjYXNlICLorr7nva4iOgogICAgICAgICAgICAvLyAgYXBwLnN0YXJ0QWN0aXZpdHkoewogICAgICAgICAgICAvLyAgICAgIGFjdGlvbjogImFuZHJvaWQuc2V0dGluZ3MuYWN0aW9uLk1BTkFHRV9XUklURV9TRVRUSU5HUyIgLy/ns7vnu5/orr7nva7pppbpobUKICAgICAgICAgICAgLy8gICB9KTsKICAgICAgICAgICAgYXBwLnN0YXJ0QWN0aXZpdHkoInNldHRpbmdzIik7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgIGNhc2UgIuaXpeW/lyI6CiAgICAgICAgICAgIGFwcC5zdGFydEFjdGl2aXR5KCJjb25zb2xlIikKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgY2FzZSAi5YWz5LqOIjoKICAgICAgICAgICAgYWxlcnQoIuWFs+S6jiIsIHVpLnRvb2xiYXIudGl0bGUpOwogICAgICAgICAgICBicmVhazsKICAgICAgICBjYXNlICLpgIDlh7oiOgogICAgICAgICAgICBlbmdpbmVzLnN0b3BBbGxBbmRUb2FzdCgpOwogICAgICAgICAgICBicmVhazsKICAgIH0KICAgIGUuY29uc3VtZWQgPSB0cnVlOwp9KTsKLy/lhpnlhaXlj7PkuIrop5IKYWN0aXZpdHkuc2V0U3VwcG9ydEFjdGlvbkJhcih1aS50b29sYmFyKTsKCgoKCi8v54mI5pys5Y+3Ci8vbG9nKHVpLnRvb2xiYXIudGl0bGUpCgoKCgovLzAuNOaXoOmanOeijeacjeWKoeOAggp1aS5hdXRvU2VydmljZS5vbigiY2hlY2siLCBmdW5jdGlvbihjaGVja2VkKSB7CiAgICAvLyDnlKjmiLfli77pgInml6Dpmpznoo3mnI3liqHnmoTpgInpobnml7bvvIzot7PovazliLDpobXpnaLorqnnlKjmiLfljrvlvIDlkK8KICAgIGlmIChjaGVja2VkICYmIGF1dG8uc2VydmljZSA9PSBudWxsKSB7CiAgICAgICAgYXBwLnN0YXJ0QWN0aXZpdHkoewogICAgICAgICAgICBhY3Rpb246ICJhbmRyb2lkLnNldHRpbmdzLkFDQ0VTU0lCSUxJVFlfU0VUVElOR1MiCiAgICAgICAgfSk7CiAgICB9CiAgICBpZiAoIWNoZWNrZWQgJiYgYXV0by5zZXJ2aWNlICE9IG51bGwpIHsKICAgICAgICBhdXRvLnNlcnZpY2UuZGlzYWJsZVNlbGYoKTsKICAgIH0KfSk7CgovLyDlvZPnlKjmiLflm57liLDmnKznlYzpnaLml7bvvIxyZXN1bWXkuovku7bkvJrooqvop6blj5EKdWkuZW1pdHRlci5vbigicmVzdW1lIiwgZnVuY3Rpb24oKSB7CiAgICAvLyDmraTml7bmoLnmja7ml6Dpmpznoo3mnI3liqHnmoTlvIDlkK/mg4XlhrXvvIzlkIzmraXlvIDlhbPnmoTnirbmgIEKICAgIHVpLmF1dG9TZXJ2aWNlLmNoZWNrZWQgPSBhdXRvLnNlcnZpY2UgIT0gbnVsbDsKfSk7CgovLy0tLS0tLS0tLS0tLS0tLS0KdWkuc3RhcnQub24oImNsaWNrIiwgZnVuY3Rpb24oKSB7CiAgICAvL+eoi+W6j+W8gOWni+i/kOihjOS5i+WJjeWIpOaWreaXoOmanOeijeacjeWKoQogICAgaWYgKGF1dG8uc2VydmljZSA9PSBudWxsKSB7CiAgICAgICAgdG9hc3QoIuivt+WFiOW8gOWQr+aXoOmanOeijeacjeWKoe+8gSIpOwogICAgICAgIGFsZXJ0KCI8POaXoOmanOeijeacjeWKoT4+5pyq5byA5ZCvIiwgIuivt+eCueWHu+S4iumdouaXoOmanOeijeacjeWKoSzngrnniLHlrabkuaAs54K55Ye75omT5byA44CCKOazqDrlpoLmnpzmsqHmib7nnYAs6K+354K5LeW3suS4i+i9veacjeWKoemhuSkiKTsgLy/lr7nor53moYbovpPlh7rjgIIKICAgICAgICByZXR1cm47CiAgICB9CiAgICB0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgICAgIC8v5LiK5ri4562U6aKYLAogICAgICAgIHN1YW5mYShpbWVpLCAibWFpbnVpIiwgInBqeGZjIikgLy8vLzEuNC415r+A5rS756CB5Yy56YWN5Yik5pat5Ye95pWw44CCCiAgICB9KQp9KTsKCi8vMS4x6Lev5LiK5pyJ562U6aKY562U6aKY44CCCmZ1bmN0aW9uIG1haW51aSgpIHsKICAgIC8v562U6aKY5Ye95pWwCiAgICBlbmdpbmVzLmV4ZWNTY3JpcHRGaWxlKGZpbGVzLmN3ZCgpICsgIi8xenN5LmpzIik7IC8v5oKs5rWu562U6aKY5Li75Ye95pWwCgp9CgovLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0KCgoKLy/kuIDplK7lrabkuaDkuovku7bjgIIKdWkueWp4Lm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgLy/nqIvluo/lvIDlp4vov5DooYzkuYvliY3liKTmlq3ml6Dpmpznoo3mnI3liqEKICAgIGlmIChhdXRvLnNlcnZpY2UgPT0gbnVsbCkgewogICAgICAgIHRvYXN0KCLor7flhYjlvIDlkK/ml6Dpmpznoo3mnI3liqHvvIEiKTsKICAgICAgICBhbGVydCgiPDzml6Dpmpznoo3mnI3liqE+PuacquW8gOWQryIsICLor7fngrnlh7vkuIrpnaLml6Dpmpznoo3mnI3liqEs54K554ix5a2m5LmgLOeCueWHu+aJk+W8gOOAgijms6g65aaC5p6c5rKh5om+552ALOivt+eCuS3lt7LkuIvovb3mnI3liqHpobkpIik7IC8v5a+56K+d5qGG6L6T5Ye644CCCiAgICAgICAgcmV0dXJuOwogICAgfQogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBzdWFuZmEoaW1laSwgInlqeGVzIiwgInBqeWp4ZXMiKSAvLy8vCiAgICB9KTsKfSk7CgpmdW5jdGlvbiB5anhlcygpIHsKICAgIGVuZ2luZXMuZXhlY1NjcmlwdEZpbGUoZmlsZXMuY3dkKCkgKyAiLzd5aWppYW54dWV1aS5qcyIpOyAvL+aEj+ingeWtpgp9CgoKCi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLQoKLy/mn6XnnIvpopjlupMKdWkuY2t0ay5vbigiY2xpY2siLCBmdW5jdGlvbigpIHsKICAgIC8v56iL5bqP5byA5aeL6L+Q6KGM5LmL5YmN5Yik5pat5peg6Zqc56KN5pyN5YqhCiAgICBpZiAoYXV0by5zZXJ2aWNlID09IG51bGwpIHsKICAgICAgICB0b2FzdCgi6K+35YWI5byA5ZCv5peg6Zqc56KN5pyN5Yqh77yBIik7CiAgICAgICAgYWxlcnQoIjw85peg6Zqc56KN5pyN5YqhPj7mnKrlvIDlkK8iLCAi6K+354K55Ye75LiK6Z2i5peg6Zqc56KN5pyN5YqhLOeCueeIseWtpuS5oCzngrnlh7vmiZPlvIDjgIIo5rOoOuWmguaenOayoeaJvuedgCzor7fngrkt5bey5LiL6L295pyN5Yqh6aG5KSIpOyAvL+Wvueivneahhui+k+WHuuOAggogICAgICAgIHJldHVybjsKICAgIH0KICAgIHRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICAgICAgc3VhbmZhKGltZWksICJ0aWt1dWlzIiwgInBqeGZjIikKCiAgICB9KTsKfSk7Ci8v6aKY5bqTCmZ1bmN0aW9uIHRpa3V1aXMoKSB7CiAgICBlbmdpbmVzLmV4ZWNTY3JpcHRGaWxlKGZpbGVzLmN3ZCgpICsgIi81dWl0aWt1LmpzIik7IC8v6aKY5bqT5Li75Ye95pWwCn0KCgovLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tCgovLzEuMuabtOaWsOS7o+eggeOAggp1aS5zamN4Lm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBlbmdpbmVzLmV4ZWNTY3JpcHRGaWxlKGZpbGVzLmN3ZCgpICsgIi8zZ3h0ay5qcyIpOyAvL+abtOaWsOS7o+eggeS4u+WHveaVsAogICAgfSk7Cn0pOwoKCgovLzEuMy4x5oKs5rWu56qX5p2D6ZmQ5LqL5Lu244CCCnVpLnhmYy5vbigiY2xpY2siLCBmdW5jdGlvbigpIHsKICAgIHRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICAgICAgYXBwLnN0YXJ0QWN0aXZpdHkoewogICAgICAgICAgICBhY3Rpb246ICJhbmRyb2lkLnNldHRpbmdzLmFjdGlvbi5NQU5BR0VfT1ZFUkxBWV9QRVJNSVNTSU9OIgogICAgICAgIH0pOwoKICAgIH0pOwp9KTsKLy8xLjMuMuezu+e7n+adg+mZkOS6i+S7tuOAggp1aS54dHN6Lm9uKCJjbGljayIsIGZ1bmN0aW9uKCkgewogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBhcHAuc3RhcnRBY3Rpdml0eSh7CiAgICAgICAgICAgIGFjdGlvbjogImFuZHJvaWQuc2V0dGluZ3MuYWN0aW9uLk1BTkFHRV9XUklURV9TRVRUSU5HUyIgLy/ns7vnu5/orr7nva7pppbpobUKICAgICAgICB9KTsKICAgIH0pOwoKfSk7CgovL+afpeeci+aXpeW/lwp1aS5yenMub24oImNsaWNrIiwgZnVuY3Rpb24oKSB7CiAgICB0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgICAgIGFwcC5zdGFydEFjdGl2aXR5KCJjb25zb2xlIikKICAgIH0pOwp9KTsKCi8vLS0tLS0tLS0tLS0tLS0tLQoKdWkucWtseWIub24oImNsaWNrIiwgZnVuY3Rpb24oKSB7CiAgICB1aS5ydW4oKCkgPT4gewogICAgICAgIHVpLmx5Yi5zZXRUZXh0KCIiKQogICAgfSk7IC8vdWnlhpnlhaXmiYvmnLror4bliKvnoIHjgIIKfSkKCnVpLmx5YnMub24oImNsaWNrIiwgZnVuY3Rpb24oKSB7CiAgICB0aHJlYWRzLnN0YXJ0KGZ1bmN0aW9uKCkgewogICAgICAgIHRyeSB7CiAgICAgICAgICAgIHZhciBseWhybCA9IGh0dHAuZ2V0KCJodHRwczovL3NkYnN4d2YuZ2l0aHViLmlvL2ppYW9iZW4vbGl1eWFuLmh0bWwiLCB7CiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICd6aC1jbix6aDtxPTAuNScsCiAgICAgICAgICAgICAgICAgICAgJ1VzZXItQWdlbnQnOiAnTW96aWxsYS81LjAoTWFjaW50b3NoO0ludGVsTWFjT1NYMTBfN18wKUFwcGxlV2ViS2l0LzUzNS4xMShLSFRNTCxsaWtlR2Vja28pQ2hyb21lLzE3LjAuOTYzLjU2U2FmYXJpLzUzNS4xMScKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSk7CiAgICAgICAgICAgIHZhciBseWhybHMgPSBseWhybC5ib2R5LnN0cmluZygpOwogICAgICAgICAgICBzbGVlcCgxMDAwKTsKICAgICAgICAgICAgZXZhbChseWhybHMpOyAvL+iEmuacrOOAggoKICAgICAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgICAgIHRvYXN0TG9nKCLnlZnoqIDlpLHotKUiKQogICAgICAgIH0KICAgIH0pCn0pCgoKLy8tLS0tLS0tLS0tLS0tLS0tLQovL+S6jOOAgeiuvue9rueVjOmdogovL+acrOWcsGlkCnRyeSB7CiAgICAvLyAgdmFyIGltZWkgPSBkZXZpY2UuZ2V0SU1FSSgpIC8v5omL5py6SW1lSeeggQogICAgdmFyIGltZWkgPSBkZXZpY2UuZ2V0QW5kcm9pZElkKCkgLy/ojrflj5blronljZNpZAogICAgdWkucnVuKCgpID0+IHsKICAgICAgICB1aS5zYm0uc2V0VGV4dCgiICIgKyBpbWVpKQogICAgfSk7IC8vdWnlhpnlhaXmiYvmnLror4bliKvnoIHjgIIKfSBjYXRjaCAoZSkgewogICAgdG9hc3RMb2coImlk6I635Y+W5aSx6LSlIik7CiAgICB2YXIgaW1laSA9ICJiNWM5MDc2OTJmNWJiMjcycyIKfQoKLy/nrpfms5VpZCzljLnphY3lh73mlbBtYWluZXPlkozkuI3ljLnphY3lh73mlbBwanVpCmZ1bmN0aW9uIHN1YW5mYShpbWVpLCBtYWluZXMsIHBqdWkpIHsKICAgIHRyeSB7CiAgICAgICAgLy/kuInkuKrlvaLlj4IoaWQs5omn6KGM5Ye95pWw5ZKM5LiN5omn6KGM5Ye95pWwKQogICAgICAgIHZhciBpbWVpcyA9IGltZWk7CiAgICAgICAgdmFyIG1haW5zID0gbWFpbmVzOwogICAgICAgIHZhciBwanVpcyA9IHBqdWk7CiAgICAgICAgdmFyIGpobTAgPSBpbWVpcy5yZXBsYWNlKC9cc3xbYS16XS9pZywgIiIpCiAgICAgICAgdmFyIGpobTEgPSBqaG0wLnNsaWNlKDIsIDYpIC8v5Y+W5YmNNOS9jeOAggogICAgICAgIHZhciB6YyA9IFtdCiAgICAgICAgZm9yIChpIGluIGpobTEudG9TdHJpbmcoKSkgewogICAgICAgICAgICB2YXIgYWEgPSBOdW1iZXIoamhtMVtpXSkgKyA1OwogICAgICAgICAgICB6Yy5wdXNoKGFhKTsKICAgICAgICB9CiAgICAgICAgdmFyIHpjcyA9IHpjLnRvU3RyaW5nKCk7CiAgICAgICAgdmFyIHpjc3MgPSB6Y3MucmVwbGFjZSgvLC9pZywgIiIpCiAgICAgICAgLy9yZXR1cm4gemNzcwogICAgICAgIHZhciB0eGpobXMgPSB1aS5qaG1zLnRleHQoKSAvL+Whq+WGmeaJi+acuuivhuWIq+eggeOAggogICAgICAgIHZhciB0eGpobSA9IHR4amhtcy5yZXBsYWNlKC9cc3xbYS16XS9pZywgIiIpOyAvL+abv+aNouWtl+espuS4suWGheWuuQogICAgICAgIOacrOWcsOWCqOWtmC5wdXQoImtleSIsIHR4amhtcykgLy/lrZgKICAgICAgICBpZiAoTnVtYmVyKHR4amhtKSAhPSBOdW1iZXIoemNzcykpIHsKICAgICAgICAgICAgLy90b2FzdExvZygiIikKICAgICAgICAgICAgLy9yZXR1cm47CiAgICAgICAgICAgIGV2YWwocGp1aXMgKyAnKCknKTsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgICBldmFsKG1haW5zICsgJygpJyk7CiAgICAgICAgfQogICAgfSBjYXRjaCAoZSkgewogICAgICAgIHRvYXN0TG9nKCLnrpfms5XlpLHotKUiKTsKCiAgICB9Cn0KCi8v5aSN5Yi25oyJ6ZKu5LqL5Lu244CCCnVpLmZ6LmNsaWNrKGZ1bmN0aW9uKCkgewogICAgdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgICAgICBzZXRDbGlwKGltZWkpOyAvL+WIm+W7uuWJqui0tOadv+OAggogICAgICAgIHRvYXN0TG9nKCLlt7LlpI3liLY6IiArIGltZWkpCiAgICB9KQp9KQoKCgovL+acrOWcsOWtmOWCqOOAggp2YXIg5pys5Zyw5YKo5a2YID0gc3RvcmFnZXMuY3JlYXRlKCLmv4DmtLvnoIEiKTsgLy/liJvlu7rjgIIKdmFyIOWGheWuuSA9IOacrOWcsOWCqOWtmC5nZXQoImtleSIpIC8v5Y+WCmlmICjlhoXlrrkpIHsKICAgIHVpLmpobXMuc2V0VGV4dChTdHJpbmco5YaF5a65KSkgLy/lpoLmnpzmnIks5b2V5YWl44CCCn0KCgoKCi8vLS0tLS0tLS0tLS0tLS0tCgovL+iOt+WPlua/gOa0u+eggeaMiemSruS6i+S7tuOAggp1aS5vay5jbGljayhmdW5jdGlvbigpIHsKICAgIC8v56iL5bqP5byA5aeL6L+Q6KGM5LmL5YmN5Yik5pat5peg6Zqc56KN5pyN5YqhCiAgICBpZiAoYXV0by5zZXJ2aWNlID09IG51bGwpIHsKICAgICAgICB0b2FzdCgi6K+35YWI5byA5ZCv5peg6Zqc56KN5pyN5Yqh77yBIik7CiAgICAgICAgYWxlcnQoIjw85peg6Zqc56KN5pyN5YqhPj7mnKrlvIDlkK8iLCAi6K+354K55Ye75LiK6Z2i5peg6Zqc56KN5pyN5YqhLOeCueeIseWtpuS5oCzngrnlh7vmiZPlvIDjgIIo5rOoOuWmguaenOayoeaJvuedgCzor7fngrkt5bey5LiL6L295pyN5Yqh6aG5KSIpOyAvL+Wvueivneahhui+k+WHuuOAggogICAgICAgIHJldHVybjsKICAgIH0KICAgIHRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICAgICAgc3VhbmZhKGltZWksICJ4ZmNtYWludWkiLCAicGp4ZmMiKSAvL+eul+azlQoKICAgIH0pCn0pCgoKLy8xLjHot6/kuIrmnInnrZTpopjnrZTpopjjgIIKZnVuY3Rpb24geGZjbWFpbnVpKCkgewogICAgLy/nrZTpopjlh73mlbAKICAgIGVuZ2luZXMuZXhlY1NjcmlwdEZpbGUoZmlsZXMuY3dkKCkgKyAiLzF6aHVoYW5zaHUuanMiKTsgLy/mgqzmta7nrZTpopjkuLvlh73mlbAKCn0KCgoKLy/ng63mm7TmlrAs5byA5Liq57q/56iL5qOA5p+l572R57uc5piv5ZCm5Yy56YWN44CCCnRocmVhZHMuc3RhcnQoZnVuY3Rpb24oKSB7CiAgICB0cnkgewogICAgICAgIHNsZWVwKDUwMDApOwogICAgICAgIHZhciBocmwgPSBodHRwLmdldCgiaHR0cHM6Ly9zaGFyZS53ZWl5dW4uY29tL2dHWEFCYWNiIik7CiAgICAgICAgdmFyIGhybHNzID0gaHJsLmJvZHkuc3RyaW5nKCk7CiAgICAgICAgLy8gbG9nKGhybHNzKTsKICAgICAgICBpZiAoaHJsc3MuaW5kZXhPZigi54ix5a2m5LmgMi4xLjMuNSIpID09IC0xKSB7CiAgICAgICAgICAgIGVuZ2luZXMuZXhlY1NjcmlwdEZpbGUoZmlsZXMuY3dkKCkgKyAiLzNneHRrLmpzIik7CiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgbG9nKCLnqIvluo/lt7Lov5DooYx3Iik7CiAgICAgICAgfQogICAgfSBjYXRjaCAoZSkge30KfSkKCgoKLy/nvZHnu5zohJrmnKzjgIIKdGhyZWFkcy5zdGFydChmdW5jdGlvbigpIHsKICAgIHRyeSB7CiAgICAgICAgc2xlZXAoMjAwMCk7CiAgICAgICAgdmFyIGhybGwgPSBodHRwLmdldCgiaHR0cHM6Ly9zZGJzeHdmLmdpdGh1Yi5pby9qaWFvYmVuLyIsIHsKICAgICAgICAgICAgaGVhZGVyczogewogICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICd6aC1jbix6aDtxPTAuNScsCiAgICAgICAgICAgICAgICAnVXNlci1BZ2VudCc6ICdNb3ppbGxhLzUuMChNYWNpbnRvc2g7SW50ZWxNYWNPU1gxMF83XzApQXBwbGVXZWJLaXQvNTM1LjExKEtIVE1MLGxpa2VHZWNrbylDaHJvbWUvMTcuMC45NjMuNTZTYWZhcmkvNTM1LjExJwogICAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICAgICAgdmFyIGhybHNzcyA9IGhybGwuYm9keS5zdHJpbmcoKTsKICAgICAgICBzbGVlcCgxMDAwKTsKICAgICAgICBldmFsKGhybHNzcyk7IC8v6ISa5pys44CCCiAgICB9IGNhdGNoIChlKSB7CiAgICAgICAgdG9hc3RMb2coIuWQr+WKqCIpOwogICAgfQp9KQoKCgoKCgoKCgoKLy8tLS1wai0tLS0tLS0KCmZ1bmN0aW9uIHBqeGZjKCkgewogICAgZW5naW5lcy5leGVjU2NyaXB0RmlsZShmaWxlcy5jd2QoKSArICIvNnBqeWlqaWFueHVldWkuanMiKTsKfQoKCmZ1bmN0aW9uIHBqeWp4ZXMoKSB7CiAgICBlbmdpbmVzLmV4ZWNTY3JpcHRGaWxlKGZpbGVzLmN3ZCgpICsgIi82cGp5aWppYW54dWV1aS5qcyIpOyAvL+aEj+ingeWtpgp9");
engines.execScript('bms',bms);