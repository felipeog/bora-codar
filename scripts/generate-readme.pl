#!/usr/bin/perl
use strict;
use warnings;
# use JSON;
use Path::Tiny;

my @files = glob('../challenges/*/package.json');

foreach my $file (@files) {
  my $f = path($file);
  my $res = $f->slurp;
  # my $perl_scalar = decode_json $res;

  # print $perl_scalar;
  print $res;
}
