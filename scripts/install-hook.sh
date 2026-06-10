#!/bin/sh
# git hook 설치 (최초 1회 실행)
cd "$(dirname "$0")/.." || exit 1
git config core.hooksPath .githooks
chmod +x .githooks/post-commit
echo "설치 완료: Solo 커밋([solo] 태그) 시 README가 자동 갱신됩니다."
