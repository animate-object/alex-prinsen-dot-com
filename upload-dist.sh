#!/usr/bin/env bash

read -p "input the super secret public bucket name: " BUCKET_NAME
echo ---------------------------------------------------
echo building latest web content
echo ---------------------------------------------------
npm run build
echo ---------------------------------------------------
echo uploading new web content to $BUCKET_NAME
echo ---------------------------------------------------

for filename in dist/*; do
    key=${filename#dist/}
    echo uploading $filename to $key in $BUCKET_NAME
    aws s3api put-object --bucket $BUCKET_NAME --key $key --body $filename --content-type "text/html" >  /dev/null
done

