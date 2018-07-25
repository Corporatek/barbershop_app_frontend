
# sh curl-scripts/url-encoded/sign-up.sh

curl "http://localhost:4741/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo
