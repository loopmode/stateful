# [3.0.0](https://github.com/loopmode/stateful/compare/@loopmode/stateful@3.0.0...@loopmode/stateful@3.0.0) (2022-11-07)


### Bug Fixes

* clean timers when entering confirm state ([2dd280c](https://github.com/loopmode/stateful/commit/2dd280cb41720cd39d4e577926dba11eeef44197))
* do not fail on function as prop factory ([9c3c5ac](https://github.com/loopmode/stateful/commit/9c3c5ac1621c1c2eef17fa2ffc7583c35fc3b47f))
* do not invoke callback twice ([dddc921](https://github.com/loopmode/stateful/commit/dddc9219f559bcc3670b1428e8a00c4ae25caa15))
* resolve hint duration, avoid getting stuck in final state ([2ccb13f](https://github.com/loopmode/stateful/commit/2ccb13fad8d0b7d375a866ad91f3d6407dae1057))
* stop event propagation in onConfirmApprove and onConfirmCancel ([5819d12](https://github.com/loopmode/stateful/commit/5819d1229a358be43e6bf77dbd95485e74465998))
* update types ([0bbcc47](https://github.com/loopmode/stateful/commit/0bbcc476971cdb5df9643cc300618a574b11681d))
* use SUCCESS instead of ERROR duration ([4d38602](https://github.com/loopmode/stateful/commit/4d3860296857af782444036153e3bb6fb6d3b1d6))


### Features

* Add support for user confirmation ([2229475](https://github.com/loopmode/stateful/commit/222947529a951568f69c41571978f318b24fb96f))
* **Config:** Add bulma configuration preset ([45ef02e](https://github.com/loopmode/stateful/commit/45ef02e63541a4f6eae5fd9a8715db8e1d6c3407))
* **Config:** Add configuration context via StatefulConfigProvider ([6955535](https://github.com/loopmode/stateful/commit/6955535abe21093543cb5043997977ba026bcb6b))
* handle fetch Response errors via default `shouldRejectValue` function ([904bbdf](https://github.com/loopmode/stateful/commit/904bbdf27bcc8c2925dbd30b6633494d8b016991))
* pass childProps to resolver functions ([5638080](https://github.com/loopmode/stateful/commit/5638080e92855c49a17c5798aebb1ef59d071bb9))
* support "confirm" boolean flag to confirm any monitored callback ([8a4e7bf](https://github.com/loopmode/stateful/commit/8a4e7bfea44543d0b2fa632445d74e4494654d76))
* support "disabled" prop ([d723e31](https://github.com/loopmode/stateful/commit/d723e31a6a7f49200feade03e312340d52fa533d))
* support confirm exit modes "started" | "finished" | "idle" ([d8519ac](https://github.com/loopmode/stateful/commit/d8519ac6fd2470b25d749fbcc2a8f6c9f58b2cc9))
* support indefinite final state via negative duration ([c25bc66](https://github.com/loopmode/stateful/commit/c25bc66a6dc03ef08424e8cd4948b40e6ce645a3))
* support objects as value resolvers ([43d7bdb](https://github.com/loopmode/stateful/commit/43d7bdbcb437e7b78f7b57fcd7a3f0cbfcd8ad57))
* support render functions ([8404489](https://github.com/loopmode/stateful/commit/84044898675ab2bf407cc8cb5083803d83315b2e))



