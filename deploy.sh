
#!/usr/bin/env sh

# ȷ���ű��׳������Ĵ���
set -e

# ���ɾ�̬�ļ�
npm run docs:build

# �������ɵ��ļ���
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# ��������� git@github.com:<USERNAME>/<USERNAME>.github.io.git master https://github.com/ameibj/ameibj.github.io
#git push -f git@github.com:ameibj/ameibj.github.io.git master:vueBlog
git push -f git@github.com:ameibj/blogsite.git master

cd -
