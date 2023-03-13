#!/usr/bin/perl
use strict;
use warnings;
use JSON;

my @packageFilePaths = glob("../challenges/*/package.json");
my @challenges;

foreach my $packageFilePath (@packageFilePaths) {
    open my $in, '<', $packageFilePath
      or die "Can't read file: $!";

    my $packageFileContent = do {
        local $/;
        <$in>;
    };

    my $package = decode_json $packageFileContent;
    my %hash    = (
        name    => $package->{name},
        code    => $package->{repository}->{url},
        preview => $package->{homepage},
    );

    push @challenges, {%hash};
}

foreach my $challenge (@challenges) {
    print "name: ",    $challenge->{name},    "\n";
    print "code: ",    $challenge->{code},    "\n";
    print "preview: ", $challenge->{preview}, "\n";
    print "\n";
}
